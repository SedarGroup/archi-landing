import React from "react";
import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";

const Contact = () => {
   React.useEffect(() => {
     document.querySelector("body").classList.add("index3");
   }, []);
  return (
    <MainLayout>
      <PageHeader imgSrc={"/assets/img/pg1.jpg"}
        title="Contactez nous"
        fullPath={[
          { id: 1, name: "Accueil", url: "/" },
          { id: 2, name: "contactez nous", url: "/contact" },
        ]}
        image="/assets/img/pg2.jpg"
      />
      <section className="contact">
        <ContactInfo />
        <ContactWithMap />
      </section>
    </MainLayout>
  );
};

export default Contact;
