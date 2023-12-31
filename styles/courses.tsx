import styled from 'styled-components'

const CoursesStyle = styled.section`


    .banner{
        
        .container{
            padding-top: 1%;
            padding-bottom: 0px;

            display: flex;
            justify-content: center;
            align-items: center;


            

            h2{
                color: #024CAD;
                font-size: 90px;
                font-weight: 600;
            }
        }
    }
    .body{
        background-color: #f7f8fa ;
        border-radius: 50px;
        margin: 1%;

        padding: 3%;
        background-color: #fafafa;
        .note{
            padding: 20px;
            background-color: #fff;
            max-width: 730px;
            width: 100%;
            margin: 0 auto;
            border-radius: 30px;
            border: 1px solid #024CAD;;
            position: relative;
            margin-bottom: 100px;
            p{
                font-size: 20px;
                margin:0

                
            }
            img{
                position: absolute;
                width: 30px;
                top: -29px;
                right: 0;
                left: 0;
                margin: 0 auto;
                z-index: 1;
            }
            // &:after{
            //     content: "";
            //     height: 7px;
            //     width: 100px;
            //     background-color: #b60108;
            //     position: absolute;
            //     top: -4px;
            //     right: 0;
            //     left: 0;
            //     margin: 0 auto;
            // }
        }
        .grid{
            display: grid;
            grid-template-columns: repeat(3, auto);
            column-gap: 20px;
            justify-content: space-between;
            row-gap: 20px;
        }
    }

    @media(max-width:500px){
        .body{
            .grid{
                grid-template-columns: repeat(2, auto);
                row-gap: 20px;
                justify-content: center;
            }
        }
    }
`

export default CoursesStyle