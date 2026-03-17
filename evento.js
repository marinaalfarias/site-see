const eventos = {
    dia1: {
        title: 'Dia 1 - Abertura',
        subtitle: 'Palestra Magna com CEO de Tech',
        time: '09:00',
        location: 'Auditório',
        description: `A abertura da Semana da Engenharia Elétrica traz uma palestra inspiradora com um CEO do mercado de tecnologia. 
        Vamos falar sobre inovação, conectividade e como os engenheiros elétricos estão moldando o futuro.`,
        speakers: ['Prof. João Silva (CEO TechCorp)', 'Moderador: Maria Oliveira'],
        registerUrl: 'https://forms.google.com/seu-link-aqui'
    },
    dia2: {
        title: 'Dia 2 - Workshops',
        subtitle: 'Arduino e IoT na Prática',
        time: '14:00',
        location: 'Laboratórios de Eletrônica',
        description: `Neste dia, você irá colocar a mão na massa com projetos de Arduino e IoT.
        Teremos guias passo a passo e suporte de monitores para você tirar dúvidas em tempo real.`,
        speakers: ['Prof. Ana Souza', 'Equipe de Monitores SEE'],
        registerUrl: 'https://link-do-workshop'
    },
    dia3: {
        title: 'Dia 3 - Visitas Técnicas',
        subtitle: 'Visita Técnica CPFL',
        time: '08:00',
        location: 'Ponto de encontro: Entrada FEEC',
        description: `Saída para uma visita técnica à CPFL, com debates sobre geração e distribuição de energia.
        Transporte e lanche estão inclusos para os inscritos.`,
        speakers: ['Eng. Carlos Mendes (CPFL)', 'Coordenação SEE'],
        registerUrl: 'https://link-da-visita'
    }
};

function formatList(items) {
    return `<ul>${items.map(i => `<li>${i}</li>`).join('')}</ul>`;
}

function renderEvento(evento) {
    return `
        <h3>${evento.title}</h3>
        <p class="subtitulo">${evento.subtitle}</p>
        <p><strong>Horário:</strong> ${evento.time}</p>
        <p><strong>Local:</strong> ${evento.location}</p>
        <p>${evento.description}</p>
        <p><strong>Palestrantes / Monitores:</strong></p>
        ${formatList(evento.speakers)}
        <div class="card-actions">
            <a href="index.html#cronograma" class="btn-card btn-secondary">Voltar ao cronograma</a>
            <a href="${evento.registerUrl}" target="_blank" class="btn-card">Inscrever-se</a>
        </div>
    `;
}

function renderListaEventos() {
    return `
        <h3>Selecione um evento</h3>
        <p>Escolha um dos eventos abaixo para ver mais detalhes.</p>
        <div class="cards-grid">
            ${Object.entries(eventos)
                .map(([key, ev]) => `
                    <div class="card">
                        <h4>${ev.title}</h4>
                        <p>${ev.subtitle}</p>
                        <span>${ev.time} • ${ev.location}</span>
                        <div class="card-actions">
                            <a href="evento.html?evento=${key}" class="btn-card btn-secondary">Ver mais</a>
                            <a href="${ev.registerUrl}" target="_blank" class="btn-card">Inscrever-se</a>
                        </div>
                    </div>
                `)
                .join('')}
        </div>
    `;
}

function init() {
    const params = new URLSearchParams(window.location.search);
    const eventoKey = params.get('evento');
    const target = document.getElementById('evento-details');

    if (!eventoKey || !eventos[eventoKey]) {
        document.title = 'Eventos - Semana da Engenharia Elétrica';
        target.innerHTML = renderListaEventos();
        return;
    }

    const evento = eventos[eventoKey];
    document.title = `${evento.title} - Semana da Engenharia Elétrica`;
    target.innerHTML = renderEvento(evento);
}

init();
