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
        name: 'Carlos Santos',
        role: 'CEO & Founder',
        story: 'Entusiasta de inovação com 10 anos de experiência em arquitetura escalável.'
    },
    {
        id: 'f2',
        name: 'Ricardo Lima',
        role: 'CTO & Founder',
        story: 'Especialista em segurança e sistemas críticos de alto desempenho.'
    },
    {
        id: 'f3',
        name: 'Mateus Oliveira',
        role: 'Head of AI',
        story: 'Referência em machine learning e modelos preditivos.'
    },
    {
        id: 'f4',
        name: 'Tiago Rocha',
        role: 'Product Lead',
        story: 'Visão de produto centrada no usuário e em design de alta fidelidade.'
    }
];

export const PROCESS_DATA: ProcessStep[] = [
    { id: 1, title: 'Imersão', description: 'Entendemos seu negócio profundamente.' },
    { id: 2, title: 'Estratégia', description: 'Desenhamos a solução inteligente.' },
    { id: 3, title: 'Execução BOLD', description: 'Desenvolvemos com agilidade e ousadia.' }
];
