export type mockDataType = {
  title: string
  contractorCompany: string
  location: string[]
  user: string
  tags: string[]
  status: string
  lastEditDate: string
  avatar: string | undefined
}[]
export const mockData: mockDataType = [
  {
    title: 'Зимнее',
    contractorCompany: 'ГПН-Хантос',
    location: ['Зимнее'],
    user: 'Михаилов И.С.',
    tags: ['Скважины'],
    status: 'В работе',
    lastEditDate: '1 час назад',
    avatar: undefined,
  },
  {
    title: 'Валынтойское',
    contractorCompany: 'ГПН-Хантос',
    location: ['Валынтойское'],
    user: 'Михаилов И.С.',
    tags: ['Скважины', 'Сейсмика'],
    status: 'В работе',
    lastEditDate: '2 часа назад',
    avatar: undefined,
  },
  {
    title: 'Свод всем МР',
    contractorCompany: 'ГПН-Хантос',
    location: ['Зимнее', 'Им. Александра Жагрина'],
    user: 'Михаилов И.С.',
    tags: ['Скважины', 'Сейсмика', 'Марекера', 'Сейсмика1', 'Марекера1'],
    status: 'В работе',
    lastEditDate: '2 часа назад',
    avatar: undefined,
  },
  {
    title: 'Вайское',
    contractorCompany: 'ГПН-Хантос',
    location: ['Северо-Вайское'],
    user: 'Михаилов И.С.',
    tags: ['Скважины', 'Марекера'],
    status: 'В работе',
    lastEditDate: '3 часа назад',
    avatar: undefined,
  },
  {
    title: 'Жагрина 2022',
    contractorCompany: 'ГПН-Хантос',
    location: ['Им. Александра Жагрина'],
    user: 'Михаилов И.С.',
    tags: ['Скважины', 'Марекера'],
    status: 'В работе',
    lastEditDate: '3 часа назад',
    avatar: undefined,
  },
  {
    title: 'Зимнее Свод',
    contractorCompany: 'ГПН-Хантос',
    location: ['Зимнее'],
    user: 'Михаилов И.С.',
    tags: ['Скважины', 'Сейсмика'],
    status: 'В работе',
    lastEditDate: '3 часа назад',
    avatar: undefined,
  },
  {
    title: 'Южное',
    contractorCompany: 'ГПН-Хантос',
    location: ['Северо-Вайское'],
    user: 'Михаилов И.С.',
    tags: ['Скважины', 'Марекера'],
    status: 'В работе',
    lastEditDate: '12 мая 2022',
    avatar: undefined,
  },
  {
    title: 'Орехова',
    contractorCompany: 'ГПН-Хантос',
    location: ['Им. Александра Жагрина'],
    user: 'Михаилов И.С.',
    tags: ['Скважины'],
    status: 'В работе',
    lastEditDate: '10 мая 2022',
    avatar: undefined,
  },
  {
    title: 'Северное',
    contractorCompany: 'ГПН-Хантос',
    location: ['Зимнее'],
    user: 'Михаилов И.С.',
    tags: ['Скважины', 'Сейсмика'],
    status: 'В работе',
    lastEditDate: '26 апреля 2022',
    avatar: undefined,
  },
]
