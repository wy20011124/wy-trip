<template>
    <div class="bar">
         <div class="left">
            <div class="chat">
                <van-icon name="comment-o" size="20" />
                <span class="text">聊天</span>
            </div>
            <div class="price">
                 <div class="finalPrice">{{"￥"+barData?.finalPrice}}</div>
                 <div class="priceMark">{{barData?.priceMark}}</div>
                 <div class="productPrice">{{barData?.productPrice}}</div>
            </div>
         </div>
         <div class="right">
            <van-icon name="fire-o" size="16" />
            <span class="text">预定当前房源</span>
         </div>
    </div>
</template>

<script setup>
defineProps({
    barData:{
        type:Object,
        default:()=>{}
    }
})
</script>

<style lang="less" scoped>
.bar{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    z-index: 99;
    background-color: #fff;
    display: flex;
    padding: 0 15px;
    border-top: 1px solid rgb(246, 245, 245);
    .left{
        flex: 2;
        display: flex;
        .chat{
           display: flex;
           flex-direction: column;
           align-items: center;
           justify-content: center;
           border-right: 1px solid rgb(96, 91, 91);
           padding-right: 10px;
           margin: 13px 10px;
           .text{
            font-size: 11px;
           }
           
        }
        .price{
            display: flex;
            align-items: center;
            .finalPrice{
                font-size: 16px ;
                color: var(--primary-color);
                font-weight: 600;
                margin-right: 5px;
            }
            .priceMark{
                margin-right: 5px;
                font-size: 11px;
            }
            .productPrice{
                font-size: 11px;
                text-decoration: line-through;
            }
        }
    }
    .right{
        flex: 1.5;
        display: flex;
        justify-content: start;
        align-items: center;
        background: var(--theme-linear-gradient);
        color: #fff;
        padding-left: 5px;
        .text{
            margin: 0 5px;
            font-size:18px ;
        }
    }
}
</style>