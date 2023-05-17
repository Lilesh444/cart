import React from "react";

class CartItem extends React.Component{
    constructor(){
        super();
        this.state={
            price:999,
            title:'Phone',
            Qty:1,
            img:''
        }
    }
    increaseQuantity=()=>{
        console.log('this',this.state)
    }
    render(){
        const{price,title,Qty}=this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img  style={styles.Image}/>
                </div>
                <div className="right-block">
                    <div style={ {fontSize:25}}>{title}</div>
                    <div style={ {color:'#777'}}>${price}</div>
                    <div style={ {color:'#777'}}>{Qty}</div>
                    <div className="cart-item-action">
                        {/* buttons */}
                        <img alt="increase"
                         className="action-icons" 
                         src="https://t4.ftcdn.net/jpg/01/07/62/07/240_F_107620769_UwNVSoXnKS4VNcOKoZjPohlEPn83oE38.jpg"
                         onClick={this.increaseQuantity}
                         />
                        <img alt="decrease"
                         className="action-icons" 
                          src="https://t3.ftcdn.net/jpg/03/73/49/86/240_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                          />
                        <img alt="delete"
                         className="action-icons" 
                          src="https://t3.ftcdn.net/jpg/00/65/77/26/240_F_65772602_cPboY4Oamnswse6bN2r9ky4hXDQEVNix.jpg"
                          />
                    </div>
                </div>
            </div>

        );

    }
}

const styles={
    Image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#777'
    }
}
export default CartItem;
