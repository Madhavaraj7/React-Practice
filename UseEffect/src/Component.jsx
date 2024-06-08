function Component1(props) {
    const data = props.data
    return (
        <div className="container" key={data.id}>
            <div className="name">{data.name}</div>
            <div className="email">Email:{data.email}</div>
        </div>
    )
}

export default Component1