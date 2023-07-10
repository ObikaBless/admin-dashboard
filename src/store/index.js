import { createStore } from "vuex"

const store = createStore({
    state() {
        return {
            currentTab : "all",
            users: [
                {
                    id: 1,
                    name: "John Doe",
                    email: "johndoe@example.com",
                    status: "Active",
                    lastLogin: "14/APR/2020",
                    paymentStatus: "Paid",
                    paymentDate: "14/APR/2020",
                    duesOn: null,
                    amount: "$200"
                },
                {
                    id: 2,
                    name: "Jane Doe",
                    email: "janedoe@example.com",
                    status: "Active",
                    lastLogin: "15/APR/2020",
                    paymentStatus: "Unpaid",
                    paymentDate: null,
                    duesOn: "15/MAY/2020",
                    amount: "$150"
                },
                {
                    id: 3,
                    name: "Bob Smith",
                    email: "bobsmith@example.com",
                    status: "Inactive",
                    lastLogin: "10/APR/2020",
                    paymentStatus: "Overdue",
                    paymentDate: "14/APR/2020",
                    duesOn: "14/MAY/2020",
                    amount: "$100"
                },
                {
                    id: 4,
                    name: "Alice Johnson",
                    email: "alicejohnson@example.com",
                    status: "Active",
                    lastLogin: "12/APR/2020",
                    paymentStatus: "Paid",
                    paymentDate: "12/APR/2020",
                    duesOn: null,
                    amount: "$250"
                },
                {
                    id: 5,
                    name: "Tom Wilson",
                    email: "tomwilson@example.com",
                    status: "Active",
                    lastLogin: "16/APR/2020",
                    paymentStatus: "Unpaid",
                    paymentDate: null,
                    duesOn: "16/MAY/2020",
                    amount: "$175"
                },
                {
                    id: 6,
                    name: "Sarah Lee",
                    email: "sarahlee@example.com",
                    status: "Inactive",
                    lastLogin: "11/APR/2020",
                    paymentStatus: "Overdue",
                    paymentDate: "14/APR/2020",
                    duesOn: "14/MAY/2020",
                    amount: "$125"
                },
                {
                    id: 7,
                    name: "David Kim",
                    email: "davidkim@example.com",
                    status: "Active",
                    lastLogin: "13/APR/2020",
                    paymentStatus: "Paid",
                    paymentDate: "13/APR/2020",
                    duesOn: null,
                    amount: "$300"
                },
                {
                    id: 8,
                    name: "Emily Chen",
                    email: "emilychen@example.com",
                    status: "Active",
                    lastLogin: "17/APR/2020",
                    paymentStatus: "Unpaid",
                    paymentDate: null,
                    duesOn: "17/MAY/2020",
                    amount: "$225"
                },
                {
                    id: 9,
                    name: "Michael Brown",
                    email: "michaelbrown@example.com",
                    status: "Inactive",
                    lastLogin: "9/APR/2020",
                    paymentStatus: "Overdue",
                    paymentDate: "14/APR/2020",
                    duesOn: "14/MAY/2020",
                    amount: "$150"
                },
                {
                    id: 10,
                    name: "Olivia Davis",
                    email: "oliviadavis@example.com",
                    status: "Active",
                    lastLogin: "18/APR/2020",
                    paymentStatus: "Paid",
                    paymentDate: "18/APR/2020",
                    duesOn: null,
                    amount: "$350"
                },
            ],

            userActivity: [
                {
                    user_id: 1,
                    date: "14/APR/2020",
                    activity: "loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    details: "loreum ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                    user_id: 2,
                    date: "15/APR/2020",
                    activity: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                    details: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                },
                {
                    user_id: 3,
                    date: "16/APR/2020",
                    activity: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                    user_id: 4,
                    date: "17/APR/2020",
                    activity: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                    details: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit."
                },
                {
                    user_id: 5,
                    date: "18/APR/2020",
                    activity: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                    details: "Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                },
                {
                    user_id: 6,
                    date: "19/APR/2020",
                    activity: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
                    details: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                    user_id: 7,
                    date: "20/APR/2020",
                    activity: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
                    details: "Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur."
                },
                {
                    user_id: 8,
                    date: "21/APR/2020",
                    activity: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                    details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident."
                },
                {
                    user_id: 9,
                    date: "22/APR/2020",
                    activity: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                    details: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
                },
                {
                    user_id: 10,
                    date: "23/APR/2020",
                    activity: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
                    details: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat."
                }
            ]
        }
    },
    mutations: {
        changeTab(state, tab) {
            state.currentTab = tab
        },

        filter(state, filter) {
             if(filter == "alpha"){
                let users =  state.users.slice().sort((a, b) => {
                    return a.name.localeCompare(b.name)
                })
                state.users = users
             }else if(filter == "date"){
                let users =  state.users.slice().sort((a, b) => {
                    return new Date(a.duesOn) - new Date(b.duesOn)
                })
                state.users = users
             }
        }
    },
    actions: {
        searchUser({state}, query) {
            let users = state.users.filter(user => {
                return user.name.toLowerCase().includes(query.toLowerCase()) || user.email.toLowerCase().includes(query.toLowerCase())
            })
            state.users = users
        }

    },
    getters: {
        totalPayable(state) {
            return state.users.reduce((acc, user) => {
                let amount = user.amount.slice(1) // remove the $ sign
                return acc + parseInt(amount)
            }, 0)
        },

        allUsers(state) {
            return state.users
        },
        paidUsers(state) {
            return state.users.filter(user => user.paymentStatus === "Paid")
        },
        unpaidUsers(state) {
            return state.users.filter(user => user.paymentStatus === "Unpaid")
        },
        overDueUsers(state) {
            return state.users.filter(user => user.paymentStatus === "Overdue")
        },

        singleUserActivity: (state) => (id) => {
            return state.userActivity.filter(activity => activity.user_id === id)
        }
    }
})

export default store