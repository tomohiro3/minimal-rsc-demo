export const Server = async () => {
    const date = await new Promise<Date>((resolve) => {
        setTimeout(() => {
            resolve(new Date());
        }, 2000);
    });

    return(
        <div>
            {date.toString()}
            <span style={{color: 'red', fontWeight:700}}>(rendered by server)</span>
        </div>
    )
}