import { Container } from "./styles"

export const TransactionTable = ()=>{
return(
  <Container>
    <table>
      <thead>
        <tr>
          <th>Título</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            Desenvolvimento de Website
          </td>
          <td>R$12.000</td>
          <td>Desenvolvimento</td>
          <td>07-02-2023</td>
        </tr>
        <tr>
          <td>
            Desenvolvimento de Website
          </td>
          <td>R$12.000</td>
          <td>Desenvolvimento</td>
          <td>07-02-2023</td>
        </tr>
        <tr>
          <td>
            Desenvolvimento de Website
          </td>
          <td>R$12.000</td>
          <td>Desenvolvimento</td>
          <td>07-02-2023</td>
        </tr>
        
      </tbody>
    </table>
  </Container>
)
}