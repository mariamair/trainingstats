/**
 * Class that handles training information
 * 
 * @author Maria Mair <mm225mz@student.lnu.se>
 */

export class Controller {

  saveInformation(req, res, next) {
    console.log(req.body)
    res.json('Saved')
  }
}
