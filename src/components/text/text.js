export const Heading1 = (props)=>
{
    const {text} = props;
    return(
        <p className="text-4xl font-bold">{text}</p>
    )
}

export const Heading2 =(props)=>
{
    const {text}= props;
    return(
        <p className="text-xl font-sans tracking-wide font-normal" >{text}</p>
    )
}