import { Service, Founder, ProcessStep } from '../models/SiteContent';

export const SERVICES_DATA: Service[] = [
    {
        id: 'soft-dev',
        title: 'Desenvolvimento de Elite',
        description: 'Software robusto construído com inteligência coletiva e as tecnologias mais modernas do mercado.',
        icon: 'code'
    },
    {
        id: 'ai-intel',
        title: 'Inteligência Artificial',
        description: 'Integração de modelos inteligentes para otimizar processos e gerar insights ousados.',
        icon: 'psychology'
    },
    {
        id: 'tech-cons',
        title: 'Consultoria Estratégica',
        description: 'Mais que código, entregamos visão de negócio pautada na confiança e inovação.',
        icon: 'trending_up'
    }
];

export const FOUNDERS_DATA: Founder[] = [
    {
        id: 'f1',
        name: 'Paluan Batista',
        role: 'CEO e Founder - Engenheiro de Software Sênior',
        story: 'Liderança técnica e estratégica, transformando visões complexas em arquiteturas de software de alto desempenho.',
        image: '/images/paluan.png'
    },
    {
        id: 'f2',
        name: 'Wagner Neves',
        role: 'CEO e Founder - Dev Full Stack Senior',
        story: 'Especialista em todo o ciclo de vida da aplicação, unindo agilidade e precisão técnica do front ao back.',
        image: '/images/wagner.jpeg'
    },
    {
        id: 'f3',
        name: 'Marcos Lopes',
        role: 'CEO e Founder - Analista de Sistemas e Gestor Comercial Senior',
        story: 'Marcos Lopes atua na área de tecnologia com experiência prática em desenvolvimento de sistemas, análise de dados e organização de times técnicos. Ao longo de sua trajetória profissional, participou da construção e evolução de aplicações corporativas utilizadas em ambientes de negócio complexos, com forte atuação em banco de dados, análise de processos e desenvolvimento de interfaces.\n\nDurante sua carreira, destacou-se não apenas pela atuação técnica, mas também pela capacidade de liderança e organização de equipes. Em experiências anteriores, assumiu responsabilidades de orientação e desenvolvimento de colegas de equipe, contribuindo para formação técnica de profissionais e para melhoria da colaboração dentro dos times.\n\nSeu perfil combina conhecimento técnico com forte habilidade de relacionamento e gestão de pessoas, sempre buscando criar ambientes de trabalho colaborativos e focados em resultados. Marcos acredita que tecnologia só gera valor quando alinhada às necessidades reais das empresas e das pessoas que utilizam os sistemas no dia a dia.\n\nNa SafeTrust, atua na estruturação do negócio, relacionamento com clientes e desenvolvimento estratégico da plataforma, contribuindo para transformar necessidades do mercado em soluções tecnológicas acessíveis e escaláveis.',
        image: '/images/founder-placeholder.png'
    },
    {
        id: 'f4',
        name: 'Jhon Toledo',
        role: 'Analista de Sistemas Senior - Dev Front End Senior',
        story: 'Especialista em interfaces premium e experiência do usuário, focado em alta performance visual e interativa.',
        image: '/images/Foto_jhon.png'
    }
];

export const PROCESS_DATA: ProcessStep[] = [
    { id: 1, title: 'Imersão', description: 'Entendemos seu negócio profundamente.' },
    { id: 2, title: 'Estratégia', description: 'Desenhamos a solução inteligente.' },
    { id: 3, title: 'Execução BOLD', description: 'Desenvolvemos com agilidade e ousadia.' }
];
