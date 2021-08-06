import main from '../../assets/images/main.svg'
import search from '../../assets/images/search.svg'
import tabs from '../../assets/images/tables.svg'
import calendar from '../../assets/images/calendar.svg'
import maps from '../../assets/images/maps.svg'
import vidgets from '../../assets/images/vidgets.svg'
import setup from '../../assets/images/setup.svg'
import setup_user from '../../assets/images/setup-user.svg'
import money_management from '../../assets/images/money-management.svg'
import logout from '../../assets/images/logout.svg'




 const NavBarData = [
    {
        title:'Главная',
        icon:main,
        path:'/',
        nested:[]
    },
    {
        title:'Поиск адресов',
        icon:search,
        path:'/address',
        nested:[]
    },
    {
        title:'Таблицы',
        icon:tabs,
        path:'/',
        nested:[]
    },
    {
        title:'Календарь',
        icon:calendar,
        path:'/',
        nested:[]
    },
    {
        title:'Карты',
        icon:maps,
        path:'/',
        nested:[]
    },
    {
        title:'Виджеты',
        icon:vidgets,
        path:'/',
        nested:[]
    },
    {
        title:'Настройки',
        icon:setup,
        path:'/',
        nested:[
            {
                title:'Настройки пользователя',
                icon:setup_user,
                path:'/',
                nested:[]
            },
            {
                title:'Настройки пользователя',
                icon:money_management,
                path:'/',
                nested:[]
            }

        ]
    },
    {
        title:'Выход',
        icon:logout,
        path:'/',
        nested:[]
    }

]

export default NavBarData

