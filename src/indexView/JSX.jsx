import styled from 'styled-components-vue'
const Wrapper = styled.div`
    background-color:red

`

export default{
    render(){
        return (
            <div>{this.msg}</div>
            )
    },
    data(){
        return{
            msg:'asdasdas'
        }
    }
}