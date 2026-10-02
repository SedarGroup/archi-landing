import React from "react";
import Link from "next/link";
import { validateEmail } from "../../utils";
import { SCHEMAS } from "./schemas";

const ENDPOINT = "/.netlify/functions/sendProjectBrief";

const buildInitialValues = (steps) => {
  const values = {};
  steps.forEach((step) => {
    step.fields.forEach((field) => {
      if (field.type === "chips") {
        values[field.name] = [];
      } else {
        values[field.name] = field.defaultValue || "";
      }
    });
  });
  return values;
};

const countDigits = (value) => (value.match(/\d/g) || []).length;

const validateField = (field, value) => {
  const isEmpty =
    field.type === "chips" ? !value || value.length === 0 : !String(value || "").trim();

  if (field.required && isEmpty) {
    return field.type === "chips"
      ? "Sélectionnez au moins une option."
      : "Ce champ est obligatoire.";
  }
  if (isEmpty) return null;

  if (field.type === "email" && !validateEmail(value)) {
    return "Cette adresse email ne semble pas valide.";
  }
  if (field.type === "tel" && countDigits(value) < 9) {
    return "Indiquez un numéro de téléphone complet.";
  }
  if (field.minLength && String(value).trim().length < field.minLength) {
    return `Décrivez votre projet un peu plus précisément (au moins ${field.minLength} caractères).`;
  }
  return null;
};

const ProjectBriefForm = ({
  variant,
  id = "devis",
  fieldOptions = {},
  selection,
  onSelectionChange,
  pageTitle,
}) => {
  const schema = SCHEMAS[variant];
  const steps = schema.steps;
  const lastStep = steps.length; // the recap sits one past the last field step

  const [step, setStep] = React.useState(0);
  const [values, setValues] = React.useState(() => buildInitialValues(steps));
  const [errors, setErrors] = React.useState({});
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState("idle");
  const [serverError, setServerError] = React.useState(null);
  const honeypot = React.useRef(null);
  const topRef = React.useRef(null);

  // The renovation page owns the work-type selection so the card grid and the
  // chips below it can never drift apart.
  const controlledName = React.useMemo(() => {
    const field = steps
      .flatMap((s) => s.fields)
      .find((f) => f.controlled);
    return field ? field.name : null;
  }, [steps]);

  React.useEffect(() => {
    if (controlledName && selection) {
      setValues((prev) => ({ ...prev, [controlledName]: selection }));
    }
  }, [controlledName, selection]);

  const resolveOptions = (field) => fieldOptions[field.name] || field.options || [];

  const setValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const toggleChip = (field, option) => {
    const current = values[field.name] || [];
    const next = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];

    if (field.controlled && onSelectionChange) {
      onSelectionChange(next);
    } else {
      setValue(field.name, next);
    }
    setErrors((prev) => {
      if (!prev[field.name]) return prev;
      const copy = { ...prev };
      delete copy[field.name];
      return copy;
    });
  };

  const scrollToTop = () => {
    if (topRef.current) {
      const top = topRef.current.getBoundingClientRect().top + window.pageYOffset - 110;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const validateStep = (index) => {
    const nextErrors = {};
    steps[index].fields.forEach((field) => {
      const message = validateField(field, values[field.name]);
      if (message) nextErrors[field.name] = message;
    });
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, lastStep));
    scrollToTop();
  };

  const goBack = () => {
    setStep((s) => Math.max(s - 1, 0));
    scrollToTop();
  };

  const recapRows = React.useMemo(() => {
    const rows = [];
    steps.forEach((s) => {
      s.fields.forEach((field) => {
        const value = values[field.name];
        const printable = Array.isArray(value) ? value.join(", ") : value;
        if (printable && String(printable).trim()) {
          rows.push({ key: field.label, value: String(printable) });
        }
      });
    });
    return rows;
  }, [steps, values]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (honeypot.current && honeypot.current.value) return; // bot
    if (!consent) {
      setServerError("Merci d'accepter d'être recontacté avant d'envoyer votre demande.");
      return;
    }

    // Re-validate everything in case a field was emptied after being filled.
    for (let i = 0; i < steps.length; i += 1) {
      if (!validateStep(i)) {
        setStep(i);
        scrollToTop();
        return;
      }
    }

    setStatus("submitting");
    setServerError(null);

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: schema.subject,
          page: pageTitle || variant,
          name: values.name,
          email: values.email,
          phone: values.phone,
          fields: recapRows,
        }),
      });

      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      setStatus("success");
      scrollToTop();
    } catch (error) {
      setStatus("error");
      setServerError(
        "L'envoi a échoué. Réessayez dans un instant, ou contactez-nous directement au +221 78 444 60 02."
      );
    }
  };

  const renderField = (field) => {
    const error = errors[field.name];
    const value = values[field.name];
    const fieldClass = `sg-field ${field.full ? "sg-field--full" : ""} ${
      error ? "has-error" : ""
    }`;
    const describedBy = error ? `${field.name}-error` : undefined;

    if (field.type === "chips") {
      const options = resolveOptions(field);
      return (
        <div className={fieldClass} key={field.name}>
          <span className="sg-fieldset__legend">
            {field.label} {field.required && <span className="sg-req">*</span>}
          </span>
          <div className="sg-chips">
            {options.map((option) => (
              <label className="sg-chip" key={option}>
                <input
                  type="checkbox"
                  checked={(value || []).includes(option)}
                  onChange={() => toggleChip(field, option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
          {error && (
            <span className="sg-field__error" id={describedBy}>
              {error}
            </span>
          )}
        </div>
      );
    }

    return (
      <div className={fieldClass} key={field.name}>
        <label htmlFor={`${id}-${field.name}`}>
          {field.label} {field.required && <span className="sg-req">*</span>}
        </label>

        {field.type === "select" && (
          <select
            id={`${id}-${field.name}`}
            value={value}
            aria-describedby={describedBy}
            onChange={(event) => setValue(field.name, event.target.value)}
          >
            <option value="">Sélectionnez…</option>
            {resolveOptions(field).map((option) => (
              <option value={option} key={option}>
                {option}
              </option>
            ))}
          </select>
        )}

        {field.type === "textarea" && (
          <textarea
            id={`${id}-${field.name}`}
            value={value}
            placeholder={field.placeholder}
            aria-describedby={describedBy}
            onChange={(event) => setValue(field.name, event.target.value)}
          />
        )}

        {!["select", "textarea"].includes(field.type) && (
          <input
            id={`${id}-${field.name}`}
            type={field.type}
            min={field.min}
            value={value}
            placeholder={field.placeholder}
            aria-describedby={describedBy}
            onChange={(event) => setValue(field.name, event.target.value)}
          />
        )}

        {error && (
          <span className="sg-field__error" id={describedBy}>
            {error}
          </span>
        )}
        {!error && field.hint && <span className="sg-field__hint">{field.hint}</span>}
      </div>
    );
  };

  if (status === "success") {
    return (
      <div className="sg-form-wrap" id={id} ref={topRef}>
        <div className="sg-success">
          <div className="sg-success__icon" aria-hidden="true">
            <i className="pe-7s-check"></i>
          </div>
          <h3 className="sg-success__title">Demande envoyée</h3>
          <p className="sg-success__text">{schema.successText}</p>
          <div className="sg-success__actions">
            <Link href="/">
              <a className="sg-btn sg-btn--ghost">Retour à l&apos;accueil</a>
            </Link>
            <Link href="/work">
              <a className="sg-btn">Voir nos réalisations</a>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const isRecap = step === lastStep;
  const current = isRecap ? null : steps[step];

  return (
    <div className="sg-form-wrap" id={id} ref={topRef}>
      <ol className="sg-progress">
        {[...steps.map((s) => s.label), "Récapitulatif"].map((label, index) => (
          <li
            className={`sg-progress__step ${index === step ? "is-active" : ""} ${
              index < step ? "is-done" : ""
            }`}
            key={label}
          >
            <span className="sg-progress__dot">
              {index < step ? <i className="fas fa-check"></i> : index + 1}
            </span>
            <span className="sg-progress__label">{label}</span>
          </li>
        ))}
      </ol>

      <form onSubmit={onSubmit} noValidate>
        <div className="sg-hp" aria-hidden="true">
          <label htmlFor={`${id}-website`}>Ne pas remplir</label>
          <input id={`${id}-website`} type="text" tabIndex="-1" autoComplete="off" ref={honeypot} />
        </div>

        {current && (
          <>
            <div className="sg-step-head">
              <h3>{current.title}</h3>
              {current.intro && <p>{current.intro}</p>}
            </div>
            <div className="sg-grid">{current.fields.map(renderField)}</div>
          </>
        )}

        {isRecap && (
          <>
            <div className="sg-step-head">
              <h3>Récapitulatif</h3>
              <p>Vérifiez vos informations avant de nous envoyer votre projet.</p>
            </div>
            <div className="sg-recap">
              {recapRows.map((row) => (
                <div className="sg-recap__row" key={row.key}>
                  <span className="sg-recap__key">{row.key}</span>
                  <span className="sg-recap__val">{row.value}</span>
                </div>
              ))}
            </div>
            <label className="sg-consent">
              <input
                type="checkbox"
                checked={consent}
                onChange={(event) => setConsent(event.target.checked)}
              />
              <span>
                J&apos;accepte que Sédar Group utilise ces informations pour me recontacter au sujet
                de mon projet. Elles ne seront ni revendues ni utilisées à d&apos;autres fins.
              </span>
            </label>
          </>
        )}

        {serverError && <div className="sg-alert sg-alert--error">{serverError}</div>}

        <div className="sg-form-actions">
          {step > 0 ? (
            <button type="button" className="sg-btn sg-btn--ghost" onClick={goBack}>
              Retour
            </button>
          ) : (
            <span />
          )}

          {isRecap ? (
            <button type="submit" className="sg-btn" disabled={status === "submitting"}>
              {status === "submitting" && <span className="sg-btn__spinner" aria-hidden="true" />}
              {status === "submitting" ? "Envoi en cours…" : "Envoyer mon projet"}
            </button>
          ) : (
            <button type="button" className="sg-btn" onClick={goNext}>
              Continuer
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProjectBriefForm;
