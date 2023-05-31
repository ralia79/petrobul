import album from '@/core/home/album-section/album/album.vue'

export default {
    components: {
        album
    },

    data() {
        return {
            questionCardItem: [
                {
                    image: require("@/assets/img/ca_oil_pumps 1.png"),
                    image2 : require("@/assets/img/asset02.svg") ,
                    isLeft: true,
                    items: [
                        {
                            title: "Wer ist der Käufer?",
                            caption:
                                "Sie verkaufen Ihre Immobilie an einem institutionellen und spezialisierten Investor für die Immobilienrente. Der Verkauf ist absolut diskret.",
                        },
                        {
                            title: "Vorhandene Restschulden ablösen?",
                            caption: "Das verfügbare Kapital kann je nach Alter durch eine Zeitrente auf 5, 10 oder 15 Jahre ausgezahlt werden. Auch ist eine Kombination mit einer Einmalzahlung möglich. Bei einer Leibrente wird das verfügbare Kapital über eine Versicherung in eine lebenslange Leibrente umgewandelt. Sind Restschulden vorhanden, wo werden diese mit einer Einbmalzahlung vorrangig abgelöst."

                        },
                        {
                            title: "Welche Sicherheiten haben Sie?",
                            caption: "Sie erhalten ein im Grundbuch Ihrer Immobilie an erster Rangstelle abgesichertes lebenslanges Wohnungsrecht das auch im Kaufvertrag abgesichert ist. Für Sie und ggf. Ihr(e) Partner(in) bzw. andere Lebensgemeinschaften wird das Wohnungsrecht, unabhängig davon wer Eigentümer ist, in Ihr Grundbuch erstrangig eingetragen. Durch die Absicherung Ihres Wohnungsrechts erstrangig im Grundbuch bleibt Ihr Wohnungsrecht auch bei einer eventuellen Insolvenz des Käufers bestehen. Das lebenslange Wohnungsrecht ist mietfrei. Ihr Anspruch auf Zeitrente wird durch Eintragung einer Reallast im Grundbuch abgesichert. Sollten Sie während der Vertragszeit bei einer Zeitrente vorzeitig versterben, so wird der Restwert der Zeitrente an Ihre Erben als Einmalzahlung ausbezahlt."

                        },
                    ],
                },
                {
                    image: require("@/assets/img/13545183_shift-1200x0_1yWVeB_nq4LBO 1.png"),
                    image2 : require("@/assets/img/asset03.svg") ,
                    isLeft: false,
                    items: [
                        {
                            title: "Wer trägt die Instandhaltungskosten?",
                            caption: "Bei einem Haus werden die größeren Kosten für Reparaturen und Instandhaltungen vom Investor übernommen und entlasten Sie finanziell. Bei Eigentumswohnungen übernimmt der Investor die in der Betriebskostenabrechnung aufgeführten nicht umlagefähigen Kosten und die Kosten für die Zuführung in die Instandhaltungsrücklage sowie Kosten für Sonderumlagen. Sie werden dadurch finanziell entlastet.",
                        },
                        {
                            title: "Ist eine Vermietung möglich?",
                            caption: "Eine Vermietung einer Einliegerwohnung ist möglich. Die Mieteinahmen verbleiben bei Ihnen. Die Aufnahme von Pflegepersonal bzw. Familienangehörigen ist möglich. Eine klassische Vermietung Ihrer Immobilie ist jedoch nicht möglich."

                        },
                        {
                            title: "Vertragsdauer & was passiert bei Auszug?",
                            caption: "Sollte sich Ihre Lebenssituation später einmal ändern und Sie Ihre Immobilie nicht mehr selbst bewohnen können, so haben Sie die Möglichkeit, den Wert des vorhandenen Wohnungsrecht gegen eine attraktive weitere Einmalzahlung vom Investor abkaufen zu lassen. Die Rückkaufwerte werden für jedes Jahr im Kaufvertrag angegeben. Der Vertrag hat eine lebenslange Laufzeit und endet entweder mit Ihrem Auszug bei dem das Wohnungsrecht gelöscht wird oder mit dem Tod des Letztlebenden, bei zwei Wohnungsberechtigten."

                        },
                    ],
                },
            ]
        }
    }
}