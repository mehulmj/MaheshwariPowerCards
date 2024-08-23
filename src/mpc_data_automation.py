import pandas as pd
from flask import jsonify,Flask,request
app=Flask(__name__)

@app.route("/")
def return_content():
    sheet_name = request.args.get("category")
    print(sheet_name)
    header = 1
    if(sheet_name == "Hospitals"):
        header = 3
    df = pd.read_excel('mpc.xlsx',sheet_name = sheet_name, header = header)
    df.fillna('',inplace = True)
    final = {sheet_name:[]}
    li=[]
    for index, row in df.iterrows():
        li.append({"Name" : row["NAME"],"Collaborator": row["COLOBRATTOR"],"Address" : row["ADDRESS"]})
        if "OFFERS" in df.columns:
            li[len(li)-1]["Offers"] = row["OFFERS"]
        else:
            li[len(li)-1]["Offers"] = row["Details"]
    final[sheet_name]=li
    return jsonify(final)

app.run(host='0.0.0.0')