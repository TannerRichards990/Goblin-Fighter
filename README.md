## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"** 
1) **Look at the drawing and name the HTML elements you'll need to realize your vision**
1) **Look at the drawing and imagine using the app. What _state_ do you need to track?** 
1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change? Does any DOM update?**
1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)


## HTML:
input for new grunt.
button for new grunt.
div for defeated grunts
div to display current state of grunts display
div to display player HP
div to display character avatar

## State:
1.)player hp:
-10 hp at first(state changes when the player gets hit)

2.)number of grunts defeated:
-initial state is 0(number)
-state changes after clicking a grunt and knocking their health to zero. GruntsDefeated will change.
-When grunt dies, this number goes up.

3.)when does the grunts array change?
-on click of a goblin,
if the user hits, decrement the goblin's HP by 1

-on submitting a challenge
add a new goblin to the array.

## Events:
on challenge submit: 
add a new grunt to the array
get the name of the new grunt from the input
make a new grunt object
push this object into our grunt array state
clear out our div of grunts
loop through our grunts data and render and append each grunt div to the DOM
as we loop, examine the HP. if the HP is 0, render a flame emojis. otherwise, render a grunt emoji.
