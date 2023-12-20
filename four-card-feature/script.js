const cardData = [
  {
    title: 'Supervisor',
    article: 'Monitors activity to identify project roadblocks',
    icon: 'img/icon-supervisor.svg',
    classId: 'supervisor',
  },
  {
    twoContent: [
      {
        title: 'Team Builder',
        article:
          'Scans our talent network to create the optimal team for your project',
        icon: 'img/icon-team-builder.svg',
        classId: 'team',
      },
      {
        title: 'Karma',
        article: 'Regularly evaluates our talent to ensure quality',
        icon: 'img/icon-karma.svg',
        classId: 'karma',
      },
    ],
  },
  {
    title: 'Calculator',
    article:
      'Uses data from past projects to provide better delivery estimates',
    icon: 'img/icon-calculator.svg',
    classId: 'calculator',
  },
]

const cardsEl = document.querySelector('.cards')
const fragment = document.createDocumentFragment()

cardData.forEach((card, idx) => {
  const columnEl = document.createElement('div')
  columnEl.className = 'col'

  if (card.title) {
    columnEl.innerHTML = `<div class="card ${card.classId}" >
                            <div class="text">
                                <h2>${card.title}</h2>
                                <p>${card.article}</p>
                            </div>
                                <img src=${card.icon} alt="icon" />
                            </div>`

    fragment.appendChild(columnEl)
  } else if (card.twoContent) {
    card.twoContent.forEach((item) => {
      const cardEl = document.createElement('div')
      cardEl.className = `card ${item.classId}`
      cardEl.innerHTML = `<div class="text">
                            <h2>${item.title}</h2>
                            <p>${item.article}</p>
                           </div>
                          <img src=${item.icon} alt="icon" />`
      columnEl.appendChild(cardEl)
      fragment.appendChild(columnEl)
    })
  }
})

cardsEl.appendChild(fragment)
