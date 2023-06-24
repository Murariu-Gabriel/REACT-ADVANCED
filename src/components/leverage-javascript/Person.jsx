const Person = ({ name, nickName, images }, { key }) => {

    const img = images?.[0]?.small?.url || "this item does not exist"

    // console.log(img)

  return (
    <div key={key}>
      <h3>{name}</h3>
      <strong>{nickName}</strong>
      <img src={img} style={{width: "200px"}} alt="This should be a default imge :)))" />
    </div>
  )
}
export default Person