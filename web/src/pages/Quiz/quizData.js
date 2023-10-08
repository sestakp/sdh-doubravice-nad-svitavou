import proudniceImg from "../../assets/quizData/proudnice.jpg"
import hadiceImg from "../../assets/quizData/hadice.jpg"
import rozdelovacImg from "../../assets/quizData/rozdelovac.jpg"
import dzberovkaImg from "../../assets/quizData/dzberovka.jpg"
import pozarniAutomobilImg from "../../assets/quizData/pozarni_automobil.jpg"
import pretlakacImg from "../../assets/quizData/pretlakac.jpg"
import saciKosImg from "../../assets/quizData/saci_kos.jpg"
import saviceImg from "../../assets/quizData/savice.jpg"
import sberacImg from "../../assets/quizData/sberac.jpg"
import agregatImg from "../../assets/quizData/agregat.jpg"


import uvazImg from "../../assets/quizData/uvaz.jpg"
import lodniImg from "../../assets/quizData/lodni.jpg"
import zkracovackaImg from "../../assets/quizData/zkracovacka.jpg"
import tesarskyImg from "../../assets/quizData/tesarsky.jpg"
import plochaSpojkaImg from "../../assets/quizData/plocha.jpg"

import proudniceZnackaImg from "../../assets/quizData/proudniceZnacka.jpg"
import hadiceZnackaImg from "../../assets/quizData/hadiceZnacka.jpg"
import rozdelovacZnackaImg from "../../assets/quizData/rozdelovacZnacka.jpg"
import dzberovkaZnackaImg from "../../assets/quizData/dzberovkaZnacka.jpg"
import pozarniAutomobilZnackaImg from "../../assets/quizData/pozarni_automobilZnacka.jpg"
import pretlakacZnackaImg from "../../assets/quizData/pretlakacZnacka.jpg"
import saciKosZnackaImg from "../../assets/quizData/saci_kosZnacka.jpg"
import saviceZnackaImg from "../../assets/quizData/saviceZnacka.jpg"
import sberacZnackaImg from "../../assets/quizData/sberacZnacka.jpg"
import agregatZnackaImg from "../../assets/quizData/agregatZnacka.jpg"


const messageForCorrectAnswer = "Správná odpověď. Dobrá práce."
const messageForIncorrectAnswer = "Špatná odpověď. Zkus to prosím znovu"

export const quizData = {
    "quizTitle": "Kvíz nejen pro mladé hasiče",
    "quizSynopsis": "Cílem tohoto kvízu je mít možnost si procvičit své dovednosti nabyté v hasičském kroužku či jako příprava před soutěží.",
    "nrOfQuestions": "10",

    "appLocale": {
        "landingHeaderText": "<questionLength> Otázek",
        "question": "Otázka",
        "startQuizBtn": "Začít kvíz",
        "resultFilterAll": "Zobrazit všechny",
        "resultFilterCorrect": "Zobrazit pouze správně zodpovězené",
        "resultFilterIncorrect": "Zobrazit pouze špatně odpovězené",
        "prevQuestionBtn": "Předchozí",
        "nextQuestionBtn": "Další",
        "resultPageHeaderText": "Dokončil jsi kvíz. Správně si zodpovědel <correctIndexLength> z <questionLength> otázek."
    },
    "questions": [

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": proudniceImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "přenosný agregát, např. požární stříkačka",
                "rozdělovač",
                "sací koš",
                "plnoproudá proudnice C"
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": hadiceImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "savice",
                "hadice",
                "sací koš",
                "sběrač"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": rozdelovacImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "savice",
                "sací koš",
                "sběrač"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": dzberovkaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "přenosný agregát, např. požární stříkačka",
                "požární automobil, např. CAS 25",
                "ruční stříkačka (džberová stříkačka)",
                "savice"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        
        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": pozarniAutomobilImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "přenosný agregát, např. požární stříkačka",
                "požární automobil, např. CAS 25",
                "ruční stříkačka (džberová stříkačka)",
                "savice"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": pretlakacImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "přetlakový ventil",
                "savice",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },


        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": saciKosImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "přetlakový ventil",
                "savice",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },
        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": saviceImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "přetlakový ventil",
                "savice",
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },
        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": sberacImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "sběrač",
                "savice",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": agregatImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "přenosný agregát, např. požární stříkačka",
                "požární automobil, např. CAS 25",
                "ruční stříkačka (džberová stříkačka)",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },


        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": tesarskyImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "Tesařský uzel",
                "Plochá spojka",
                "Zkracovačka",
                "Lodní uzel",
                "Úvaz na proudnici",
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": plochaSpojkaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "Tesařský uzel",
                "Plochá spojka",
                "Zkracovačka",
                "Lodní uzel",
                "Úvaz na proudnici",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": zkracovackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "Tesařský uzel",
                "Plochá spojka",
                "Zkracovačka",
                "Lodní uzel",
                "Úvaz na proudnici",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": lodniImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "Tesařský uzel",
                "Plochá spojka",
                "Zkracovačka",
                "Lodní uzel",
                "Úvaz na proudnici",
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": uvazImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "Tesařský uzel",
                "Plochá spojka",
                "Zkracovačka",
                "Lodní uzel",
                "Úvaz na proudnici",
            ],
            "correctAnswer": "5",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },




        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": proudniceZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "přenosný agregát, např. požární stříkačka",
                "rozdělovač",
                "sací koš",
                "plnoproudá proudnice C"
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": hadiceZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "savice",
                "hadice",
                "sací koš",
                "sběrač"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": rozdelovacZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "savice",
                "sací koš",
                "sběrač"
            ],
            "correctAnswer": "1",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": dzberovkaZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "přenosný agregát, např. požární stříkačka",
                "požární automobil, např. CAS 25",
                "ruční stříkačka (džberová stříkačka)",
                "savice"
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        
        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": pozarniAutomobilZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "přenosný agregát, např. požární stříkačka",
                "požární automobil, např. CAS 25",
                "ruční stříkačka (džberová stříkačka)",
                "savice"
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": pretlakacZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "přetlakový ventil",
                "savice",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },


        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": saciKosZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "přetlakový ventil",
                "savice",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },
        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": saviceZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "přetlakový ventil",
                "savice",
            ],
            "correctAnswer": "4",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },
        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": sberacZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "sací koš",
                "sběrač",
                "savice",
            ],
            "correctAnswer": "3",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },

        {
            "question": "Co se nachází na obrázku?",
            "questionType": "text",
            "questionPic": agregatZnackaImg, // if you need to display Picture in Question
            "answerSelectionType": "single",
            "answers": [
                "rozdělovač",
                "přenosný agregát, např. požární stříkačka",
                "požární automobil, např. CAS 25",
                "ruční stříkačka (džberová stříkačka)",
            ],
            "correctAnswer": "2",
            "messageForCorrectAnswer": messageForCorrectAnswer,
            "messageForIncorrectAnswer": messageForIncorrectAnswer,
            "explanation": "Tato proudnice je určena ke stříkání vodou plným nebo sprchovým proudem, zejména k hašení prachových a lehce rozviřitelných látek (např. uhlí, mouka, apod.).",
            "point": "1"
        },
    ]
} 