export default function handler(req, res) {

  const { id } = req.query;
  const { name } = req.body;
  const { method } = req;

  switch (method) {
    case 'GET':
      // Read data from your database
      res.status(200).json({ message: `TODO: Get User with id: ${id} ` })
      break
    case 'PUT':
      // Update data in your database
      res.status(200).json({ message: `TODO: Update User with id: ${id} - Set Name: ${name}` })
      break
    case 'DELETE':
      // Delete data in your database
      res.status(200).json({ message: `TODO: Delete User with id: ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT', 'DELETE'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
