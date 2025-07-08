<#
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
./start_project.ps1
#>

# This powershell runs well on my windows 11 machine because I already have the necessary tools installed.

Start-Process -NoNewWindow -FilePath "npx" -ArgumentList "hardhat node"

Start-Process -NoNewWindow -FilePath "npx" -ArgumentList "hardhat run scripts/deploy.js --network localhost"

cd backend
if (Test-Path "metadata.db") {
    Remove-Item "metadata.db" -Force
    Write-Host "Deleted existing metadata.db for fresh start"
}
python -m venv venv
.\venv\Scripts\activate
#pip install -r requirements.txt
Start-Process -NoNewWindow -FilePath "python" -ArgumentList "backend.py"

cd ..\frontend
npm install
Start-Process -NoNewWindow -FilePath "npm" -ArgumentList "start"