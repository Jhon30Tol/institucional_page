import { Service, Founder, ProcessStep } from '../models/SiteContent';

export const SERVICES_DATA: Service[] = [
    {
        id: 'inst-security',
        title: 'Segurança de nível institucional',
        description: 'Proteção robusta e infraestrutura resiliente para ambientes empresariais de missão crítica que exigem o mais alto padrão de confiança.',
        icon: 'security'
    },
    {
        id: 'architecture',
        title: 'Arquitetura',
        description: 'Tradução de requisitos técnicos complexos em sistemas escaláveis, performáticos e preparados para crescimento global.',
        icon: 'architecture'
    },
    {
        id: 'secure-futures',
        title: 'Futuros Digitais Seguros',
        description: 'Liderança técnica na vanguarda da inovação tecnológica, entregando soluções que resistem ao teste do tempo e da escala.',
        icon: 'visibility'
    }
];

export const FOUNDERS_DATA: Founder[] = [
    {
        id: 'f1',
        name: 'Paluan Batista Zamproni',
        role: 'Arquiteto-Chefe',
        story: 'Engenheiro de Software Sênior especialista em Golang e Java, focado em arquiteturas cloud-native, sistemas distribuídos e missão crítica. Une rigor técnico e visão de produto na SafeTrust para entregar soluções escaláveis, resilientes e de alto impacto ao negócio.',
        image: '/images/paluan.png'
    },
    {
        id: 'f2',
        name: 'Wagner Neves',
        role: 'Engenharia de Sistemas',
        story: 'Especialista em engenharia de software full stack com sólida base acadêmica, focado em soluções web e mobile escaláveis e seguras. Na SafeTrust, define a estratégia tecnológica e padrões arquiteturais para garantir crescimento sustentável e valor ao negócio.',
        image: '/images/wagner.jpeg'
    },
    {
        id: 'f3',
        name: 'Marcos Lopes',
        role: 'Estratégia de Operações',
        story: 'Especialista em tecnologia com experiência em sistemas, dados e liderança técnica, focado em alinhar soluções robustas às necessidades reais de negócio. Na SafeTrust, lidera a estruturação estratégica e o relacionamento com clientes para transformar demandas de mercado em plataformas escaláveis.',
        image: '/images/Marcos.jpeg',
        imagePosition: 'top'
    },
    {
        id: 'f4',
        name: 'Jhon Toledo',
        role: 'Dev Full Stack',
        story: 'Especialista em interfaces premium e UX, focado em alta performance visual e interações que elevam o padrão estético e funcional de produtos digitais. Une design estratégico e precisão técnica para criar experiências memoráveis, aliando sofisticação visual a resultados sólidos de negócio.',
        image: '/images/Foto_jhon.png'
    }
];

export const PROCESS_DATA: ProcessStep[] = [
    { id: 1, title: 'Imersão', description: 'Entendemos seu negócio profundamente.' },
    { id: 2, title: 'Estratégia', description: 'Desenhamos a solução inteligente.' },
    { id: 3, title: 'Execução BOLD', description: 'Desenvolvemos com agilidade e ousadia.' }
];
