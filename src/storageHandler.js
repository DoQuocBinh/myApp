const dbName = "the_name";

initMyDb();

export function insertCustomer(customer) {
    var DBOpenRequest = window.indexedDB.open(dbName, 1);
    DBOpenRequest.onsuccess = function (event) {
        let db = DBOpenRequest.result;
        let transaction = db.transaction(["customers"], "readwrite");
        let objectStore = transaction.objectStore("customers");
        let request = objectStore.add(customer);
        request.onsuccess = function (event) {
            console.log('insert done', customer);
            console.log('the primary key ', event.target.result);
        };
    }
}
export function getAll() {
    console.log("getting called")
    var customers = [];
    var DBOpenRequest = window.indexedDB.open(dbName, 1);
    DBOpenRequest.onsuccess = function (event) {
        console.log("reading db")
        let db = DBOpenRequest.result;
        let objectStore = db.transaction("customers").objectStore("customers");
        objectStore.openCursor().onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                console.log('new customer. ',cursor.key)
                let customer = {
                    id: cursor.key,
                    name: cursor.value.name,
                    country: cursor.value.country,
                    languages: cursor.value.languages,
                    gender: cursor.value.gender,
                    birthDate: cursor.value.birthDate
                };
                console.log(customer)
                customers.push(customer);
                cursor.continue();
            } else {
                console.log('No more entries!')
            }
        }
    }
    console.log("return ",customers.length)
    return customers;
}
function initMyDb() {
    var request = indexedDB.open(dbName, 1);

    request.onerror = function (event) {
        // Handle errors.
    };
    request.onupgradeneeded = function (event) {
        var db = event.target.result;

        //create table customer with primary key is auto generated
        var objectStore = db.createObjectStore("customers", { autoIncrement: true });

        // Create an index to search customers by name. We may have duplicates
        // so we can't use a unique index.
        objectStore.createIndex("name", "name", { unique: false });

        // Create an index to search customers by email. We want to ensure that
        // no two customers have the same email, so use a unique index.
        objectStore.createIndex("email", "email", { unique: true });
    };
}