//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)
// http://pivotal.github.io/jasmine/

// The first question's tests are written.
// See quiz.js for more details

describe('question1', function() {

  it('returns true if today is saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

// Write the next tests yourself!
// See quiz.js for more details

describe('question2', function(){

  it('returns true if the number is between 90 and 99', function(){
    expect(quiz.nearHundred(94)).toBe(true);
  });

  it('returns a boolean', function(){
     expect(quiz.nearHundred()).toBe(false);
  });

});


describe('question3', function(){

  it('returns a string', function(){
    expect(quiz.missingChar("string")).instanceof(String);
  });

  // it('returns a new string without the character taken out'), function() {
  //   expect(quiz.missingChar("string", 1)).toBe("sring");
  // });


});


describe('question4', function(){

  it('')
})