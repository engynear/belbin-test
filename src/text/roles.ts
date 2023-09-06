// images
import collectivist from '../assets/Roles/collectivist.jpg';
import dovodchik from '../assets/Roles/dovodchik.jpg';
import formirovatel from '../assets/Roles/formirovatel.jpg';
import ispolnitel from '../assets/Roles/ispolnitel.jpg';
import mislitel from '../assets/Roles/mislitel.jpg';
import ozenchik from '../assets/Roles/ozenchik.jpg';
import predsedatel from '../assets/Roles/predsedatel.jpg';
import razvedchik from '../assets/Roles/razvedchik.jpg';

const roles: any = {

    'Исполнитель': {
        haracteristic: 'Хорошо планирует, выполняет и доводит задачи до конца',
        functionality: 'Настаивает ради продвижения вперед, выдерживает сроки',
        weakness: 'Теряет удовлетворение от работы, когда работа не завершена',
        image: dovodchik,
        description: 'Старателен и добросовестен. Ищет ошибки и упущения. Контролирует сроки выполнения поручений. Как правило, об успехе команды судят по окончательным результатам ее работы. При этом многие люди почти патологически не могут довести начатое ими до конца, и умение завершать начатое является достаточно редким качеством. Доводчики — это люди обладающие этим даром в полной мере'
    },

    'Координатор': {
        haracteristic: 'Зрелый. Уверенный в себе, доверяющий',
        functionality: 'Разъясняет цели и расставляет приоритеты. Оценивает задачи в соответствии с целями команды',
        weakness: 'Не очень интеллигентен, личность не высоко творческая',
        image: predsedatel,
        description: 'Это сильное доминирование и преданность групповым целям. Стиль руководства командой Председателя — радушно принимать вносимые вклады в деятельность команды и оценивать их в соответствии с целями команды. Умеет четко формулировать цели, продвигает решения, делегирует полномочия. Имеет ясное представление о сильных и слабых сторонах команды и максимально использует потенциал каждого члена команды'
    },

    'Мотиватор': {
        haracteristic: 'Очень сильная личность. Общителен, динамичен',
        functionality: 'Формирует усилия команды через установление целей, приоритетов',
        weakness: 'Склонен к провокациям, раздражению, нетерпению',
        image: formirovatel,
        description: 'Формирователи всегда выступают как побудители к действию, и если команда склонна к бездействию или самодовольству, то присутствие Формирователя выведет ее из этого состояния. Такой лидер — динамичный, бросает вызов, оказывает давление.'
    },

    'Генератор идей': {
        haracteristic: 'Интроверт. Умный. Неординарный',
        functionality: 'Привносит инновационные идеи в работу команды и ее цели',
        weakness: 'Склонен «витать в облаках» и игнорировать детали',
        image: mislitel,
        description: 'Интровертивный тип генератора идей. Изобретателен, обладает богатым воображением — человек с идеями, умеющий решать нестандартные проблемы. Как правило, Мыслители действуют в одиночку, сидя в своем углу и обдумывая различные варианты. Обладают высоким интеллектуальным уровнем и очень высоким показателем креативности.'
    },

    'Исследователь ресурсов': {
        haracteristic: 'Экстраверт. Знает, кто может помочь решить проблемы и всегда в поисках новых идей',
        functionality: 'Создает сеть контактов и собирает полезные ресурсы для команды',
        weakness: 'Теряет интерес по мере угасания первоначального энтузиазма',
        image: razvedchik,
        description: 'Экстравертивный тип генератора идей. Энтузиаст, общителен. Это еще один член команды, ориентированный на предложение новых идей. Однако, способ генерации идей Исследователь ресурсовами и сам характер предлагаемых ими идей отличны от мыслителей. Они склонны не столько сами предлагать оригинальные идеи, сколько «подбирать» фрагменты идей окружающих и развивать их.'
    },
    "Аналитик-стратег": {
        haracteristic: 'Трезво оценивает обстановку. Объективен при анализировании проблем и оценке идей',
        functionality: ' Защищает команду от принятия импульсивных, отчаянных решений. Оценивает идеи',
        weakness: 'Не хватает вдохновения или способности мотивировать других',
        image: ozenchik,
        description: 'Рассудителен, проницателен, обладает стратегическим мышлением. Видит все альтернативы, все взвешивает — инспектор. Аналитик-стратег объективен при анализе проблем и оценке идей. Редко охваченный энтузиазмом, он защищает команду от принятия импульсивных, отчаянных решений. Представители этой роли ярко не проявляют себя в команде до тех пор, пока не приходит время принятия важных решений'
    },
    "Душа команды": {
        haracteristic: 'В работе и жизни самое важное — поддержание отношений',
        functionality: 'Улучшает межличностное общение, сводит к минимуму конфликты в команде',
        weakness: 'Нерешителен в момент кризиса',
        image: collectivist,
        description: 'Мягкий, восприимчивый, дипломатичный. Умеет слушать, предотвращает трения членов команды — чувствителен по отношению и к индивидам, и к ситуациям. Душа команды играет ориентированную на отношения, поддерживающую роль в команде'
    },
    "Педант": {
        haracteristic: 'Систематичный, надежный, организованный',
        functionality: ' Организует работу команды, выполняет задания, которые другие не хотят выполнять',
        weakness: 'Недостаток гибкости, осторожен и не любит непроверенные идеи',
        image: ispolnitel,
        description: 'Основным качеством Исполнителей является дисциплинированность; другие же природные способности или интеллект почти всегда в их случае вторичны. Стиль исполнителя в команде — организация работ. Исполнители надежны, консервативны и эффективны. Они обладают внутренней стабильностью и низким уровнем беспокойства. Работают преимущественно на команду, а не ради удовлетворения собственных интересов. Умеют реализовать идеи в практических действиях.'
    }
};

// первая цифра - номер страницы( начинаються с 0),
// вотрая цира - номер вопроса ( начинаються с 0)
const keys: any = {
    'Исполнитель': [
        '06',
        '10',
        '27',
        '33',
        '41',
        '55',
        '64'
    ],
    'Координатор': [
        '03',
        '11',
        '20',
        '37',
        '45',
        '52',
        '66'
    ],
    'Мотиватор': [
        '05',
        '14',
        '22',
        '31',
        '43',
        '56',
        '60'
    ],
    'Генератор идей': [
        '02',
        '16',
        '23',
        '34',
        '47',
        '50',
        '65'
    ],
    'Исследователь ресурсов': [
        '00',
        '12',
        '25',
        '36',
        '44',
        '57',
        '63'
    ],
    'Аналитик-стратег': [
        '07',
        '13',
        '26',
        '32',
        '40',
        '54',
        '61'
    ],
    'Душа команды': [
        '01',
        '15',
        '24',
        '30',
        '42',
        '51',
        '67'
    ],
    'Педант': [
        '04',
        '17',
        '21',
        '35',
        '46',
        '53',
        '62'
    ]
}

export { roles, keys };