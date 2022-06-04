const pdfer = require("jspdf");
require('jspdf-autotable');
// import jsPDF from "jspdf";
// import autoTable from 'jspdf-autotable';

// const doc = new jsPDF();
// var doc = new pdfer.jsPDF("l");
// const table = new auto.autoTable();

let data = [
    {
        "studentNo": "2019-12132",
        "name": {
            "last": "Whistle",
            "first": "Ron"
        },
        "course": "BSCHEM",
        "GWA": 1.79761,
        "verifiedBy": [
            "appleorange@up.edu.ph",
            "adminuser@up.edu.ph"
        ]
    },
    {
        "studentNo": "2019-09876",
        "name": {
            "last": "Recario",
            "first": "Reginald jr."
        },
        "course": "BACA",
        "GWA": 1.82283,
        "verifiedBy": [
            "appleorange@up.edu.ph",
            "adminuser@up.edu.ph"
        ]
    },
    {
        "studentNo": "2018-09876",
        "name": {
            "last": "Heeson",
            "first": "Blue"
        },
        "course": "BAPHLO",
        "GWA": 1.80921,
        "verifiedBy": [
            "appleorange@up.edu.ph",
            "adminuser@up.edu.ph"
        ]
    },
    {
        "studentNo": "2020-46388",
        "name": {
            "last": "Mendel",
            "first": "Gregoria"
        },
        "course": "BASOC",
        "GWA": 1.67355,
        "verifiedBy": [
            "appleorange@up.edu.ph",
            "adminuser@up.edu.ph"
        ]
    }
]

convertToPDF = (data) => {
    let columns = ["Student Number", "Full Name", "Degree Program", "General Weighted Average (GWA)", "Verified By"];
    let rows = [];

    for (i in data) {
        row = []
        row.push(data[i].studentNo);
        row.push(data[i].name.last + ", " + data[i].name.first);
        row.push(data[i].course);
        row.push(data[i].GWA);
        let users = "";
        for (j in data[i].verifiedBy) {
            users += data[i].verifiedBy[j]
            if (j != data[i].verifiedBy.length - 1) {
                users += ", ";
            }
        }
        row.push(users);
        rows.push(row);
    }

    let doc = new pdfer.jsPDF("l");
    doc.autoTable(columns, rows);
    doc.save('Record_Summary.pdf');
}

convertToPDF(data);
// exports.showSummary = async() => {


