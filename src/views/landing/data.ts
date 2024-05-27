import RocketIcon from '@iconify/icons-bx/bx-rocket'
import LikeIcon from '@iconify/icons-bx/bx-like'
import TimeFiceIcon from '@iconify/icons-bx/bx-time-five'
import GropuIcon from '@iconify/icons-bx/bx-group'

import program1 from '@/assets/images/smart-city-forum.jpg'
import progam2 from '@/assets/images/sandbox.jpg'

import brand1SvgImg from '@/assets/img/brands/01.svg'
import brand2SvgImg from '@/assets/img/brands/02.svg'
import brand3SvgImg from '@/assets/img/brands/03.svg'
import brand4SvgImg from '@/assets/img/brands/04.svg'
import brand5SvgImg from '@/assets/img/brands/05.svg'
import brand6SvgImg from '@/assets/img/brands/06.svg'

import news1Img from '@/assets/img/landing/financial/news/01.jpg'
import news2Img from '@/assets/img/landing/financial/news/02.jpg'
import news3Img from '@/assets/img/landing/financial/news/03.jpg'
import news4Img from '@/assets/img/landing/financial/news/04.jpg'

import avatar2Img from '@/assets/img/avatar/02.jpg'
import avatar3Img from '@/assets/img/avatar/03.jpg'
import avatar4Img from '@/assets/img/avatar/04.jpg'
import avatar5Img from '@/assets/img/avatar/05.jpg'
import avatar6Img from '@/assets/img/avatar/06.jpg'
import avatar40Img from '@/assets/img/avatar/40.jpg'
import avatar41Img from '@/assets/img/avatar/41.jpg'

import avatar1Img from '@/assets/img/avatar/01.jpg'

import type {
  BrandType,
  FeatureType,
  IndustryType,
  NewsType,
  TestimonialType,
  UserType
} from './type'

export const featureData: FeatureType[] = [
  {
    icon: RocketIcon,
    title: 'Innovative Solutions',
    description:
      'Massa enim libero dictumst consectetur in convallis. Lobortis cursus mi a magna ullamcorper consectetur.'
  },
  {
    icon: LikeIcon,
    title: 'Success Guarantee',
    description:
      'At ultricies id non quisque integer eget velit. Facilisis enim malesuada metus, risus amet ultricies. Magna aliquam id nunc.'
  },
  {
    icon: TimeFiceIcon,
    title: 'On Time Service',
    description:
      'Nisi augue at ridiculus odio ullamcorper in id. In bibendum diam nunc dignissim magna morbi mattis enim.'
  },
  {
    icon: GropuIcon,
    title: 'Professional Team',
    description:
      'Pellentesque rhoncus viverra vestibulum, purus purus quisque quisque sed. Cras vestibulum facilisis dictumst consequat.'
  }
]

export const industryData: IndustryType[] = [
  {
    image: program1,
    name: 'Smart City Forum',
    about:
      'Forum akhir tahun untuk para mitra yang telah membantu membangun Jakarta dengan tujuan mengenalkan inisiatif Indonesian Smart City Network dengan Jakarta sebagai titik pusatnya.'
  },
  {
    image: progam2,
    name: 'Sandbox',
    about: 'Wadah eksperimental untuk startup menguji inovasi dalam memecahkan permasalahan.'
  }
]

export const brandsData: BrandType[] = [
  {
    image: brand1SvgImg
  },
  {
    image: brand2SvgImg
  },
  {
    image: brand3SvgImg
  },
  {
    image: brand4SvgImg
  },
  {
    image: brand5SvgImg
  },
  {
    image: brand6SvgImg
  }
]

export const userData: UserType[] = [
  {
    image: avatar3Img,
    name: 'Fannie Summers',
    role: 'Founder of Lorem Company'
  },
  {
    image: avatar2Img,
    name: 'Robert Fox',
    role: 'CEO of Ipsum Company'
  },
  {
    image: avatar6Img,
    name: 'Annette Black',
    role: 'Founder of the Agency'
  },
  {
    image: avatar4Img,
    name: 'Jerome Bell',
    role: 'CEO of Dolor Ltd.'
  }
]

export const testimonialData: TestimonialType[] = [
  {
    comment:
      'Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit amet.',
    rating: 3,
    user: userData[0]
  },
  {
    comment:
      'Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.',
    rating: 5,
    user: userData[1]
  },
  {
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ipsum odio, bibendum ornare mi at, efficitur urna. Sit pretium aliquam tempor, orci dolor sed maecenas.',
    rating: 4,
    user: userData[2]
  },
  {
    comment:
      'Etiam augue ante, imperdiet et nunc sed, bibendum faucibus est. Suspendisse egestas facilisis erat eu eleifend. Pellentesque finibus congue egestas egestas suspendisse blandit justo.',
    rating: 5,
    user: userData[3]
  }
]

export const newsData: NewsType[] = [
  {
    cover: news1Img,
    time: '12 hours ago',
    title: 'Mendorong Inovasi Berkelanjutan',
    description:
      'Dengan fasilitas dan program yang dirancang untuk mendukung inovasi, hub ini memfasilitasi pengembangan solusi baru yang berkelanjutan dan relevan dengan kebutuhan kota.'
  },
  {
    cover: news2Img,
    time: '1 day ago',
    title: 'Mempercepat Pengembangan Solusi Baru',
    description:
      'Melalui proses inkubasi yang terstruktur, ide-ide inovatif dapat berkembang lebih cepat dan efektif.'
  },
  {
    cover: news3Img,
    time: 'Nov 24, 2023',
    title: 'Menanamkan Budaya Inovasi',
    description:
      'Dengan program-program pendukung, hub ini membantu menanamkan budaya inovasi dalam organisasi dan komunitas'
  }
]
