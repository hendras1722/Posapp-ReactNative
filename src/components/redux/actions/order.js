import axios from 'axios'

export const orderCheckout = (data) => {
    return {
        type: 'POST_ORDERCHECKOUT',
        payload: axios({
            method: "POST",
            url: `http://20.20.20.148:4000/order`,
            data: data
        })
    }
}


export const readCheckout = () => {
    return {
        type: 'GET_ORDER',
        payload: axios({
            method: "GET",
            url: `http://20.20.20.148:4000/order`
        })
    }
}