export interface WorkingHour {
  day: string;
  dayAr: string;
  date: string;
  dateAr: string;
  slots: string[];
}

export interface Review {
  id: number;
  author: string;
  authorAr: string;
  rating: number;
  date: string;
  dateAr: string;
  comment: string;
  commentAr: string;
}

export interface Doctor {
  id: string;
  name: string;
  nameAr: string;
  specialty: string;
  specialtyAr: string;
  city: string;
  cityAr: string;
  rating: number;
  reviews: number;
  available: boolean;
  image: string;
  imageAlt: string;
  tag: string;
  tagAr: string;
  status: string;
  statusAr: string;
  bio: string;
  bioAr: string;
  workingHours: WorkingHour[];
  experience: number;
  price: number;
  languages: string[];
  languagesAr: string[];
  about: string;
  aboutAr: string;
  patientReviews: Review[];
}

export const doctors: Doctor[] = [
  {
    id: 'karim-benali',
    name: 'Dr. Karim Benali',
    nameAr: 'د. كريم بنعلي',
    specialty: 'Médecin Généraliste',
    specialtyAr: 'طبيب عام',
    city: 'Casablanca',
    cityAr: 'الدار البيضاء',
    rating: 4.9,
    reviews: 142,
    available: true,
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1f147df5d-1763301649610.png',
    imageAlt: 'Male doctor in white coat with stethoscope, professional studio background, neutral light',
    tag: 'Généraliste',
    tagAr: 'عام',
    status: 'Available today',
    statusAr: 'متاح اليوم',
    bio: 'Médecin généraliste expérimenté, accompagnant les patients en soins primaires et médecine préventive.',
    bioAr: 'طبيب عام متمرس، يساعد المرضى في الرعاية الأولية والطب الوقائي.',
    experience: 12,
    price: 300,
    languages: ['Français', 'Arabe', 'Anglais'],
    languagesAr: ['الفرنسية', 'العربية', 'الإنجليزية'],
    about: "Dr. Karim Benali est un médecin généraliste passionné avec plus de 12 ans d'expérience dans les soins primaires. Il s'engage à offrir une approche globale et personnalisée de la santé, en mettant l'accent sur la prévention, le diagnostic précoce et le suivi continu des patients de tous âges.",
    aboutAr: "د. كريم بنعلي طبيب عام شغوف يتمتع بخبرة تزيد عن 12 عاماً في الرعاية الأولية. يلتزم بتقديم نهج شامل وشخصي للصحة، مع التركيز على الوقاية والتشخيص المبكر والمتابعة المستمرة للمرضى من جميع الأعمار.",
    patientReviews: [
      {
        id: 1,
        author: 'Sara M.',
        authorAr: 'سارة م.',
        rating: 5,
        date: '2 months ago',
        dateAr: 'منذ شهرين',
        comment: 'Très à l\'écoute et professionnel. Le cabinet est impeccable et l\'attente est courte.',
        commentAr: 'مستمع جيد ومحترف للغاية. العيادة نظيفة والانتظار قصير.'
      },
      {
        id: 2,
        author: 'Ahmed L.',
        authorAr: 'أحمد ل.',
        rating: 5,
        date: '4 months ago',
        dateAr: 'منذ 4 أشهر',
        comment: 'Le meilleur médecin généraliste que j\'ai consulté à Casablanca. Il prend vraiment le temps d\'expliquer.',
        commentAr: 'أفضل طبيب عام زرته في الدار البيضاء. يأخذ الوقت الكافي للشرح.'
      }
    ],
    workingHours: [
      {
        day: 'Monday',
        dayAr: 'الاثنين',
        date: 'Today',
        dateAr: 'اليوم',
        slots: ['09:00', '10:30', '12:00', '15:30', '17:00'],
      },
      {
        day: 'Tuesday',
        dayAr: 'الثلاثاء',
        date: 'Tomorrow',
        dateAr: 'غداً',
        slots: ['10:00', '11:30', '14:00', '16:30'],
      },
      {
        day: 'Wednesday',
        dayAr: 'الأربعاء',
        date: '10 May',
        dateAr: '10 مايو',
        slots: ['09:30', '11:00', '14:30', '16:00'],
      },
    ],
  },
  {
    id: 'amina-tahiri',
    name: 'Dr. Amina Tahiri',
    nameAr: 'د. أمينة الطاهري',
    specialty: 'Cardiologue',
    specialtyAr: 'أخصائية قلبية',
    city: 'Rabat',
    cityAr: 'الرباط',
    rating: 4.8,
    reviews: 98,
    available: true,
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1b71e3ec3-1772594817080.png',
    imageAlt: 'Female doctor smiling in clinical environment, warm professional lighting, white coat',
    tag: 'Cardio',
    tagAr: 'قلب',
    status: 'Available tomorrow',
    statusAr: 'متاح غداً',
    bio: 'Cardiologue spécialisée, experte dans le traitement des maladies cardiovasculaires et le suivi de la pression artérielle.',
    bioAr: 'أخصائية أمراض القلب، خبيرة في علاج أمراض القلب والأوعية الدموية ومتابعة ضغط الدم.',
    experience: 15,
    price: 450,
    languages: ['Français', 'Arabe'],
    languagesAr: ['الفرنسية', 'العربية'],
    about: "Dr. Amina Tahiri est une cardiologue renommée à Rabat. Elle utilise les dernières technologies pour diagnostiquer et traiter une vaste gamme d'affections cardiaques. Son cabinet est équipé pour réaliser des échocardiographies, des holters et des tests d'effort avec le plus grand soin.",
    aboutAr: "د. أمينة الطاهري طبيبة قلب مشهورة في الرباط. تستخدم أحدث التقنيات لتشخيص وعلاج مجموعة واسعة من أمراض القلب. عيادتها مجهزة لإجراء تخطيط صدى القلب واختبارات الإجهاد بعناية فائقة.",
    patientReviews: [
      {
        id: 1,
        author: 'Rachid B.',
        authorAr: 'رشيد ب.',
        rating: 5,
        date: '1 week ago',
        dateAr: 'منذ أسبوع',
        comment: 'Excellente prise en charge. Le docteur Tahiri est rassurante et très compétente.',
        commentAr: 'رعاية ممتازة. الدكتورة الطاهري مطمئنة وذات كفاءة عالية.'
      }
    ],
    workingHours: [
      {
        day: 'Wednesday',
        dayAr: 'الأربعاء',
        date: '10 May',
        dateAr: '10 مايو',
        slots: ['09:30', '11:00', '15:00'],
      },
      {
        day: 'Thursday',
        dayAr: 'الخميس',
        date: '11 May',
        dateAr: '11 مايو',
        slots: ['08:00', '10:00', '13:00', '14:30'],
      },
    ],
  },
  {
    id: 'youssef-alaoui',
    name: 'Dr. Youssef Alaoui',
    nameAr: 'د. يوسف العلوي',
    specialty: 'Pédiatre',
    specialtyAr: 'طبيب أطفال',
    city: 'Marrakech',
    cityAr: 'مراكش',
    rating: 4.7,
    reviews: 76,
    available: false,
    image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1c9a573d8-1769076261865.png',
    imageAlt: 'Friendly male pediatric doctor with stethoscope, bright airy office setting, natural light',
    tag: 'Pédiatrie',
    tagAr: 'أطفال',
    status: 'Next slot available tomorrow',
    statusAr: 'الموعد التالي غداً',
    bio: 'Pédiatre dévoué au bien-être des enfants, de la naissance à l’adolescence.',
    bioAr: 'طبيب أطفال مكرس لرفاهية الأطفال من الولادة حتى المراهقة.',
    experience: 8,
    price: 250,
    languages: ['Français', 'Arabe', 'Espagnol'],
    languagesAr: ['الفرنسية', 'العربية', 'الإسبانية'],
    about: "Dr. Youssef Alaoui est un pédiatre bienveillant dédié à la croissance saine et au bien-être des enfants et des adolescents. Il offre un environnement accueillant et rassurant, rendant chaque visite chez le médecin moins intimidante pour les plus petits.",
    aboutAr: "د. يوسف العلوي طبيب أطفال ودود مكرس للنمو الصحي ورفاهية الأطفال والمراهقين. يوفر بيئة مرحبة ومطمئنة، مما يجعل كل زيارة للطبيب أقل إثارة للخوف للصغار.",
    patientReviews: [
      {
        id: 1,
        author: 'Kenza Z.',
        authorAr: 'كنزة ز.',
        rating: 4,
        date: '3 months ago',
        dateAr: 'منذ 3 أشهر',
        comment: 'Très doux avec les enfants. Mon fils n\'a même pas pleuré pendant le vaccin.',
        commentAr: 'لطيف جداً مع الأطفال. ابني لم يبكِ حتى أثناء تلقي اللقاح.'
      }
    ],
    workingHours: [
      {
        day: 'Thursday',
        dayAr: 'الخميس',
        date: 'Tomorrow',
        dateAr: 'غداً',
        slots: ['10:00', '11:00', '12:30'],
      },
      {
        day: 'Friday',
        dayAr: 'الجمعة',
        date: '12 May',
        dateAr: '12 مايو',
        slots: ['09:00', '14:00', '16:00'],
      },
    ],
  },
];
