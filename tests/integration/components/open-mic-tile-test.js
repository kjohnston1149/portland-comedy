import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('open-mic-tile', 'Integration | Component | open mic tile', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{open-mic-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#open-mic-tile}}
      template block text
    {{/open-mic-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
