function asyncOperation(value) {
    return Promise.resolve(value + 1);
}
 
function foo() {
    return getValues().then(function(values) {
        var operations = <span class="skimlinks-unlinked">values.map(function(value</span>) {
            return asyncOperation(value).then(function(newValue) {
                <span class="skimlinks-unlinked">console.log(newValue</span>);
                return newValue;
            });
        });
  
        return <span class="skimlinks-unlinked">Promise.all(operations</span>);
    }).catch(function(err) {
        <span class="skimlinks-unlinked">console.log('We</span> an ', err);
    });
}
