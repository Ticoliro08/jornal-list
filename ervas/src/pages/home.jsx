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
import manjericao from '../assets/home/majericao.jpg'
import boldo from '../assets/home/boldo.jfif'
import camomila from '../assets/home/camomila.jfif'



function Home(){
    
    return(
        <>
            <Header />
          

<CardText id='topic1' titulo='O que são ervas medicinais' texto='As plantas medicinais são usadas há muito tempo por nossos antepassados e são conhecidas por terem um papel importante na cura e tratamento de algumas doenças. Em algumas comunidades, essas plantas simbolizam a única forma de tratamento de determinadas patologias. Estima-se que aproximadamente 80% da população do planeta já tenha feito uso de algum vegetal para aliviar sintomas de alguma doença.' img={img1}  />

{/* _____________________________________________PITANGUEIRA ______________________________________ */}
<CardText id='topic2' titulo='Eugenia Uniflora' texto='A pitangueira (Eugenia uniflora) é uma árvore nativa do Brasil, mas cultivada em vários países subtropicais. Uma grande diversidade de nutrientes e compostos bioativos foi encontrada nas folhas e frutos de E. uniflora, o que corrobora seu uso na medicina popular para tratar doenças como distúrbios estomacais e intestinais, febre e inflamação geral.'
texto2=' Efeitos antimicrobianos, antivirais, antifúngicos e antioxidantes no metabolismo foram relatados para esta planta. Esta revisão discute o perfil fitoquímico, a toxicidade e a ação farmacológica das folhas e frutos de E. uniflora e aponta lacunas na literatura que precisam ser investigadas mais a fundo. Esta revisão também discute estudos desenvolvidos com E. uniflora demonstrando seu promissor potencial terapêutico para diversas doenças com aparente baixa toxicidade em mamíferos.'
texto3='A compilação dos principais resultados farmacológicos e toxicológicos, bem como a caracterização fitoquímica das variedades e constituintes de E. uniflora são aspectos gerais que esta revisão tenta demonstrar a fim de contribuir para novas abordagens e desenvolvimentos na descoberta de fármacos de produtos naturais derivados de plantas. Entretanto, mais estudos são necessários para estabelecer os efeitos nutracêuticos e os usos da E. uniflora como um suplemento importante e seguro para a saúde humana.'
 img={pitangueira}  />
{/* _____________________________________________LARANJA ______________________________________ */}
<CardText id='topic3' titulo='Citrus Sinensis' texto='Citrus sinensis é um extrato obtido da Laranja. Esse fruto contém uma variedade de componentes fitoquímicos que contribuem para o sabor e as propriedades do mesmo. Estas substâncias incluem os bioflavonóides, sendo compostos por diversos ativos fitoquímicos, dentre eles se destaca as antocianinas e as flavanonas, ativos esses presentes no extrato da espécie em no mínimo 90%. Estudos indicam que esses ativos são responsáveis por, 
melhorar a sensibilidade à insulina e, diminuir os níveis séricos de triglicérides, colesterol total e colesterol-LDL.'
texto2='Nos últimos anos, foram avaliados os efeitos benéficos do C. sinensis e os componentes ativos sendo utilizados no controle de peso e obesidade, como demonstra um estudo publicado no International Journal of Obesity, que os componentes presentes no extrato da laranja vermelha Moro agem sinergicamente, e reduzem o ganho de peso e o acúmulo de gordura induzida em animais alimentados com dieta hiperlipídica, com redução da gordura abdominal de 25 a 50%' 
texto3='O Citrus sinensis contém D-limoneno, substância que contribui para a redução dos marcadores inflamatórios associado ao sobrepeso e auxilia na compulsão alimentar associada à ansiedade. Além disso, ajuda no controle da irritabilidade, alterações de humor e sono. Também sendo coadjuvante na modulação do cortisol, contribuindo para a diminuição dos efeitos prejudiciais do estresse.'
img={laranja}  />
{/* _____________________________________________MANJERICÃO ______________________________________ */}
<CardText id='topic4' titulo='Ocimum Basilicum' texto='Ocimum basilicum, popularmente conhecido como manjericão, basilicão ou alfavaca, é uma erva cultivada em quase todo o mundo, amplamente utilizada na culinária internacional, na medicina tradicional e em inúmeros rituais religiosos. Nativo da Ásia Tropical, o manjericão é uma erva ou subarbusto, profusamente ramificado, que atinge até 1,5 m de altura. Sua filotaxia é oposta-cruzada, com folhas pequenas que, dependendo da variedade, podem ter formas diversas, sendo elípticas, lanceoladas ou ovaladas, brilhantes, lisas ou com ondulações, e de coloração verde ou purpurescente, além de extremamente perfumadas. Suas inflorescências são axilares ou terminais, do tipo racemo, com pequenas flores brancas ou liláses e fruto tipo aquênio.'
texto2='
Desde a Idade Antiga, o manjericão já era conhecido pela beleza de suas pequenas flores, associadas ao aroma suave, doce e refrescante que exalava nos ambientes onde era cultivado. Além disso, já era notório o seu poder terapêutico no alívio e combate a doenças respiratórias e digestivas, bem como sua ação anti-inflamatória, sendo usado até hoje na medicina tradicional e na Ayurveda, a milenar medicina indiana. O manjericão é também empregado no tratamento de disfunções gástricas e renais, dores de cabeça, tosse, resfriado e constipação. Possui ainda ação bactericida, fungicida, estimulante, antioxidante, afrodisíaca, anti-helmíntica, adstringente, carminativa e antitérmica; na região do Mediterrâneo, o manjericão é plantado em beirais de janelas para repelir insetos, devido à alta ação repelente.' 
img={manjericao}  />
{/* _____________________________________________BOLDO ______________________________________ */}
<CardText id='topic5' titulo='Peumus Boldus' texto='O boldo é uma planta muito usada em todo o mundo na medicina popular como remédio contra má digestão e doenças no fígado. É frequentemente indicada para pessoas que ingerem bebidas alcoólicas em grande quantidade. A ação do boldo é comprovada e acredita-se que a substância responsável pelos seus benefícios é o alcaloide boldina. Além da presença desse alcaloide, as folhas apresentam taninos, óleos essenciais e flavonoides.'
texto2='Os benefícios do boldo são geralmente relacionados com a espécie Peumus boldus, uma Monimiaceae endêmica do Chile, popularmente chamada de boldo-do-chile. Ela não é vista crescendo naturalmente no Brasil, mas seus subprodutos são encontrados em farmácia. Frequentemente são utilizadas outras espécies de boldo brasileiras como medicinais, porém estudos comprovam que a maioria das espécies utilizadas pode causar irritação gástrica e problemas na gestação.' 
texto3='O boldo-do-chile tem ação colerética (estimula a produção da bile), colagoga (estimula a secreção da bile para o duodeno) e diurética, além do efeito hepatoprotetor, anti-inflamatório e antioxidante.'
img={boldo}  />
{/* _____________________________________________CAMOMILA ______________________________________ */}
<CardText id='topic6' titulo='Matricaria Chamomilla' texto='A camomila (Matricaria chamomilla), que pertence à família Asteraceae e é nativa da Europa, é bastante utilizada na medicina tradicional. Trata-se de uma planta herbácea, anual e que apresenta flores em capítulos, sendo as centrais amarelas e as marginais brancas. Popularmente ela é chamada também de camomila-alemã, macela-nobre, maçanilha, matricária, camomila-da-alemanha, camomila-legítima, entre outras denominações.'
texto2='A camomila é uma das plantas medicinais mais conhecidas e utilizadas no mundo, pois apresenta compostos importantes que estão distribuídos de maneira diferente em cada parte. Suas flores, principal parte utilizada, apresentam altos níveis de substâncias, como os flavonoides, cumarinas e o óleo essencial alfa-bisabolol, que podem ser usadas no tratamento de vários problemas de saúde.' 
texto3='Essa planta é bastante conhecida por sua propriedade antiespasmódica, anti-inflamatória, carminativa, ansiolítica, cicatrizante, antibacteriana, calmante e analgésica. Dessa forma, é frequentemente usada para tratamento de feridas estomacais, doenças inflamatórias do trato gastrointestinal, cólicas gastrointestinais, febre, gripe, dor de dente e ouvido, insônia, dores de cabeça, queimaduras, indigestão, terçol, irritações nos olhos, constipação, diarreia, dermatite de contato, eczema, mucosite, entre vários outros problemas.
Além disso, a camomila também é usada como aromatizante, fazendo parte da composição de sabonetes, perfumes, shampoos e cremes, bem como para aromatizar alimentos e bebidas. Destaca-se também seu em clareamento de cabelo e limpeza de pele.'
img={camomila}  />
           
            <Footer />
        </>
    )
}

export default Home