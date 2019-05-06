package Trivia.tests

import Trivia.web.categories
import org.scalatest._




class tests {


  class testCategories extends FunSuite {
    var url = "https://opentdb.com/api.php?amount=10"
    var httpResponse = categories.httpRequest(url)
    test("Trivia.tests functionality of categories") {

      var httpResponse = categories.httpRequest(url)
      var answer = categories.filterAnswer()
      var incorrect = categories.filterIncorrect()
      var choices = categories.choices()

      for (i <- incorrect) {
        assert(choices.contains(i))
      }
      assert(choices.contains(answer))


    }

    class testGui extends FunSuite {
       test("Nickname"){
         val name = "Jiggy"

       }


    }

    class testWebApp extends FunSuite {


    }

  }

}
