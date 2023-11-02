import { rosModel } from '../models/ros.js';

export class rosController {
  static async getTopics(req, res) {
    console.log('controller get all');
    let response = await rosModel.getTopics();
    res.json(response);
  }
  static async getListMaster(req, res) {
    console.log('controller get all');
    let response = await rosModel.getListMaster();
    res.json(response);
  }

}