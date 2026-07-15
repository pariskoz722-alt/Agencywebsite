export default function FAQ() {
    const faqData = [
    {
        question: "Poso kairo pairnei h kataskeuh mia istoselidas;",
        answer: "Gia ena aplo landing page xreiazomaste 3-5 hmeres, enw gia ena cutom E-shop h SaaS efarmogh sunithws pairnei 2 me 4 evdomades, analoga me tis anagkes sas."
    },
    {
        question: "Gia ti oi times einai se morfi 'apo...';",
        answer: "Kathe project einai monadiko kai ftiagmeno 100% sta metra tou pelati. H timh diamorfwnetai analoga me ta features, to poluplokothta tou kwdika kai ta integrations pou tha xreiaoteite."
    },
    {
        question: "Prosferete upostiriji meta tin paradosi;",
      answer: "Fusika! Kathe paketo mas perilambanei enan mhna dwrean upostirijhs (updates, security checks), kai meta mporoume να sunexisoume me kapoio mhniaio sumvolaio sunthrhshs."
    }
];

return (
    <section id="faq" className="faq-section">
        <h2 className="section-title">Syxnes Erwthshs</h2>
        <p className="section-subtitle">Breite apanthseis pio koinis apories sas</p>

        <div className="faq-container">
            {faqData.map((item, index) => (
                <details className="faq-item" key={index}>
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                </details>
            ))}
            </div> 
            </section> 
);
}  