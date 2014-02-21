describe("$.SelectableList", function() {
  var selectableList,
      $titleElement,
      $submitInput

  beforeEach(function() {
    var fixtureHTML = "<form id='test_form'>" +
      "<h2>Select Tribe members</h2>" +
      "<ul>" +
        "<li><input type='checkbox' />Phife</li>" +
        "<li><input type='checkbox' />Q-tip</li>" +
        "<li><input type='checkbox' />Ali</li>" +
        "<li><input type='checkbox' />Jarobi</li>" +
      "</ul>" +
      "<input type='submit' value='Delete selected tribe members' />" +
    "</form>";
    $('body').append(fixtureHTML);

    $titleElement = $('#test_form h2');
    $submitInput = $('input[type="submit"]')

    var $form = $('form#test_form');
    selectableList = new $.SelectableList($form, {
      $titleElement: $form.find('h2'),
      $submitElement: $form.find('input[type="submit"]'),
      $checkboxElements: $form.find('input[type="checkbox"]'),
      checkboxSelector: 'input[type="checkbox"]'
    });
  });

  afterEach(function() {
    $('#test_form').remove();
  });

  describe('#init', function() {
    beforeEach(function() {
      selectableList.init();
    });

    it('disables the submit element', function() {
      expect($submitInput.is(':disabled')).toBe(true)
    });
  });

  describe('when more than one item has been selected', function() {
    beforeEach(function() {
      selectableList.init();
      $('ul li:first-child input').prop('checked', true).change();
      $('ul li:last-child input').prop('checked', true).change();
    });

    it('updates the title', function() {
      expect($titleElement.text()).toEqual('2 members selected');
    });

    it('enables the submit element', function() {
      expect($submitInput.is(':disabled')).toEqual(false);
    });
  });
});
