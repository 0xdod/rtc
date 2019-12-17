import styled from 'styled-components'


export const AppStyle = styled.div`
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    height: 100vh;
    font-size: 16px;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`

export const Nav = styled.div`
    flex-basis: 20%;
`

export const NavContainer = styled.div`
    height: 50vh;
    margin-bottom: 0;
    box-shadow: 3px 2px 5px  rgba(0,0,0,.4), -3px -2px 5px  rgba(0,0,0,.4) ;
`

export const NavHeading = styled.div`
    padding: 0.6em 0.2em;
    background:  #282c34;
    color: white;
`

export const NavBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 88%;
    
`
export const MsgContainer = styled.div`
    flex-basis: 80%;
    margin-bottom: 0;
    height: 100vh;
`
export const MsgHeading = styled.div`
    padding: 0.5em 0.2em;
    background:  #E8E8E8;
`

export const MsgBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 88%;
    padding: 0 1em;
`

export const Ul = styled.ul`
    flex: 1;
    overflow-y: auto;
    list-style-type:none;
    padding: 0;
`

export const Li = styled.li`
    padding: 1px 4px;
    cursor: pointer;
    font-size: 15px;
`

export const FormGroup = styled.div`
    margin-bottom: 0;
    width: 95%;
    margin: 0 auto;
    > input{
        width:100%;
        border: 0;
        outline: none;
        padding: .5em;
        box-shadow: 1px 2px 5px  rgba(0,0,0,.4);
        &:focus{
            border-bottom: 1.5px solid #282c34
        }
    }
    
`

export const TimeStamp = styled.i`
    color: #808080;
    font-style: italic;
    padding-left: 10px;
    font-size: 13px;
`
export const Msgauthor = styled.strong`
flex-basis: 100%;
`
export const Msgbody = styled.div`
flex-basis: 100%;
`