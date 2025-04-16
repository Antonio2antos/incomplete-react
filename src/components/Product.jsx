import React,  {useState} from 'react'

function Product(props) {

    const {
        product: { id, nome, preco, categoria, emStock },
        toggleStock,
        eliminarProduct,
        atualizarProduto
    } = props

    const [isEditing, setIsEditing] = useState(false);
    const [editedNome, setEditedNome] = useState(nome);
    const [editedPreco, setEditedPreco] = useState(preco);
 
    function handleGuardar() {
    atualizarProduto(id, editedNome, editedPreco);
    setIsEditing(false);
  }

    return (
        <div className={`product ${emStock ? "in-stock" : "out-of-stock"}`}>
      {isEditing ? (
        <>
          <input className='edit'
            value={editedNome}
            onChange={(e) => setEditedNome(e.target.value)}
          />
          <br></br>
          <input className='edit'
            type="number"
            value={editedPreco}
            onChange={(e) => setEditedPreco(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3 className='nome'>{nome}</h3>
          <h3 className='preco'>{preco} €</h3>
        </>
      )}
 
      <h3 className='categoria'>{categoria}</h3>
 
      <button onClick={() => toggleStock(id)}>
        {emStock ? "Em Stock" : "Fora de Stock"}
      </button>
 
      <button className='delete' onClick={() => eliminarProduct(id)}>
        Eliminar
      </button>
 
      {isEditing ? (
        <button onClick={handleGuardar}>Guardar</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Editar</button>
      )}
    </div>
    )
}

export default Product
