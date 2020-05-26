export const modifyAName = (state, name) => { // A组件点击更改名称为A
    state.newName = name // 把方法传递过来的参数，赋值给state中的newName
}

export const modifyBName = (state, name) => {
    state.newName = name
}

// 修改token，并将token存入localStorage
export const changeLogin = (state, userToken) => {
    state.Authorization = userToken;
    localStorage.setItem('Authorization', userToken);
}
