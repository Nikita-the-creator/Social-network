import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '0c7d80e1-aebc-4629-9fc1-998afb681929'
    }
})

export const usersApi = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {})
            .then(response => {
                return response.data
            })
    },
    deleteUsers(id) {
        return instance.delete(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    postUsers(id) {
        return instance.post(`follow/${id}`, {})
            .then(response => {
                return response.data
            })
    },
    authMe() {
        return instance.get(`auth/me`, {})
            .then(data => {
                return data
            })
    },
    getProfile(userId){
        console.log('Obsolete method. Use profileAPI')
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId)
            .then(data => {
                return data
            })
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId)
            .then(data => {
                return data
            })
    },
    updateStatus(status){
        return instance.put(`profile/status` , {status: status} )
    },
    savePhoto(photoFile){
        const formData = new FormData();
        formData.append('image',photoFile)
        return instance.put(`profile/photo`,formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile` , profile )
    }
}

export const authAPI = {
    login(email, password, rememberMe, captcha) {
        return instance.post(`/auth/login`, {email, password, rememberMe,captcha})
    },
    logout() {
        return instance.delete(`/auth/login`)
    },
    captchaUrl(){
      return instance.get(`security/get-captcha-url`)
    }
}