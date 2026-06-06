$target='C:\KlarPath\klarpath_platform'
$shell=New-Object -ComObject Shell.Application
$rb=$shell.Namespace(0xA)
$items=@($rb.Items())
$restored=0
foreach($item in $items){
  for($i=0;$i -le 8;$i++){
    $d=$rb.GetDetailsOf($item,$i)
    if($d -and $d -like "*klarpath_platform*"){
      Write-Output ("Restoring: {0} -> {1}" -f $rb.GetDetailsOf($item,0), $d)
      $item.InvokeVerb("RESTORE")
      $restored++
      break
    }
  }
}
Write-Output ("Restored {0} items" -f $restored)
