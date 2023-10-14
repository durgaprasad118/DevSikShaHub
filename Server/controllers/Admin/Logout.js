const logOutAdmin = async (req, res) => {
  res.cookie('jwt', '', {
    expires: new Date(0),
  })
  res.status(200).json({
    message: 'Admin Logged Out',
  })
}
export {logOutAdmin}