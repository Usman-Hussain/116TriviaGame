package Trivia.web

import play.api.libs.json.{JsValue, Json}
import scalaj.http.Http

object categories {
  var url="https://opentdb.com/api.php?amount=10"
  var x : JsValue = httpRequest(url)

  def httpRequest(url : String): JsValue ={
    val response: String = Http(url).asString.body
    val parsed : JsValue = Json.parse(response)
    var result : JsValue = (parsed \"results").as[JsValue]//returns an array or list
    result
  }

  def filterQuestion(): String={
    var theQuestion : String = (x(2)\"question").as[String]
    theQuestion
  }

  def filterAnswer(): String={
    var theAnswer : String = (x(2)\"correct_answer").as[String]
    theAnswer
  }

  def filterIncorrect(): List[String]={
    var incorrect_Answers : List[String] = (x(2)\"incorrect_answers").as[List[String]]
    incorrect_Answers
  }

  def choices(): List[String] ={
    var choices:List[String]=List()/* choices for player*/
    choices=choices:+filterAnswer()//adds correct choice to choices list

    for(index <- filterIncorrect())/*adds incorrect answers to answer list */
    {
      choices=choices:+index
    }
    choices
  }

    def main(args: Array[String]): Unit = {



  }
}
