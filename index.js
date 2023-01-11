let json = `{
    "breed": "Beagle",
    "size": "large",
    "color": "orange",
    "age": 6
}`

fetch ('localhost/pets/add', 
{
    method: 'POST',
    body: json,
})