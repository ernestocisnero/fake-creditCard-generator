export const ValidCardsToUse = ()=>{

    const validCards:Array<number> = [
        2222405343248877,
        2222990905257051,
        2223007648726984,
        2223577120017656,
        5105105105105100,
        5111010030175156,
        5185540810000019,
        5200828282828210,
        5204230080000017,
        5204740009900014,
        5420923878724339,
        5455330760000018,
        5506900490000436,
        4012888888881881,
        4111111111111111,
        6011000990139424,
        6011111111111117,
        3530111333300000,
        3566002020360505
    ]

    return validCards[ Math.floor(Math.random() * ((validCards.length-1) - 0 + 1)) + 0 ];

    //return Math.floor(Math.random() * (4 - 0 + 1)) + 0;
    


}