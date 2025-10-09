/**
 * Class that handles training information
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class Controller {

  // eslint-disable-next-line no-unused-vars
  saveInformation(req, res, next) {
    // eslint-disable-next-line no-undef
    console.log(req.body)
    res.json('Saved')
  }
}
