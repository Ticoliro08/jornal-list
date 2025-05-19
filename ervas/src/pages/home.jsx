// Style
import "./home.css"
//.

// Componentes
    import Header from "../components/header"
    import Footer from "../components/footer"
    import CardText from "../components/cardText"
// imagens
import img1 from "../assets/home/img1.jpg"
import pitangueira from "../assets/home/pitangueira.jpg"
import laranja from "../assets/home/laranja.jpg"




function Home(){
    
    return(
        <>
            <Header />
          

            <br /><br /><br /><br /><br /><br />
<CardText id='topic1' titulo='O que são ervas medicinais' texto='As plantas medicinais são usadas há muito tempo por nossos antepassados e são conhecidas por terem um papel importante na cura e tratamento de algumas doenças. Em algumas comunidades, essas plantas simbolizam a única forma de tratamento de determinadas patologias. Estima-se que aproximadamente 80% da população do planeta já tenha feito uso de algum vegetal para aliviar sintomas de alguma doença.' img={img1}  />

{/* _____________________________________________PITANGUEIRA ______________________________________ */}
<CardText id='topic2' titulo='Eugenia uniflora' texto='A pitangueira (Eugenia uniflora) é uma árvore nativa do Brasil, mas cultivada em vários países subtropicais. Uma grande diversidade de nutrientes e compostos bioativos foi encontrada nas folhas e frutos de E. uniflora, o que corrobora seu uso na medicina popular para tratar doenças como distúrbios estomacais e intestinais, febre e inflamação geral.'
texto2=' Efeitos antimicrobianos, antivirais, antifúngicos e antioxidantes no metabolismo foram relatados para esta planta. Esta revisão discute o perfil fitoquímico, a toxicidade e a ação farmacológica das folhas e frutos de E. uniflora e aponta lacunas na literatura que precisam ser investigadas mais a fundo. Esta revisão também discute estudos desenvolvidos com E. uniflora demonstrando seu promissor potencial terapêutico para diversas doenças com aparente baixa toxicidade em mamíferos.'
texto3='A compilação dos principais resultados farmacológicos e toxicológicos, bem como a caracterização fitoquímica das variedades e constituintes de E. uniflora são aspectos gerais que esta revisão tenta demonstrar a fim de contribuir para novas abordagens e desenvolvimentos na descoberta de fármacos de produtos naturais derivados de plantas. Entretanto, mais estudos são necessários para estabelecer os efeitos nutracêuticos e os usos da E. uniflora como um suplemento importante e seguro para a saúde humana.'
 img={pitangueira}  />
{/* _____________________________________________LARANJA ______________________________________ */}
<CardText id='topic3' titulo='Citrus sinensis' texto='Citrus sinensis é um extrato obtido da Laranja. Esse fruto contém uma variedade de componentes fitoquímicos que contribuem para o sabor e as propriedades do mesmo. Estas substâncias incluem os bioflavonóides, sendo compostos por diversos ativos fitoquímicos, dentre eles se destaca as antocianinas e as flavanonas, ativos esses presentes no extrato da espécie em no mínimo 90%. Estudos indicam que esses ativos são responsáveis por, 
melhorar a sensibilidade à insulina e, diminuir os níveis séricos de triglicérides, colesterol total e colesterol-LDL.'
texto2='Nos últimos anos, foram avaliados os efeitos benéficos do C. sinensis e os componentes ativos sendo utilizados no controle de peso e obesidade, como demonstra um estudo publicado no International Journal of Obesity, que os componentes presentes no extrato da laranja vermelha Moro agem sinergicamente, e reduzem o ganho de peso e o acúmulo de gordura induzida em animais alimentados com dieta hiperlipídica, com redução da gordura abdominal de 25 a 50%' 
texto3='O Citrus sinensis contém D-limoneno, substância que contribui para a redução dos marcadores inflamatórios associado ao sobrepeso e auxilia na compulsão alimentar associada à ansiedade. Além disso, ajuda no controle da irritabilidade, alterações de humor e sono. Também sendo coadjuvante na modulação do cortisol, contribuindo para a diminuição dos efeitos prejudiciais do estresse.'
img={laranja}  />
           
            <Footer />
        </>
    )
}

export default Home