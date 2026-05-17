Add-Type -AssemblyName System.Drawing

# Create bitmap
$bitmap = New-Object System.Drawing.Bitmap(450, 120)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

# Set background color (dark gray)
$bgBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(31, 41, 55))
$graphics.FillRectangle($bgBrush, 0, 0, 450, 120)

# Draw circle for ZF
$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 2)
$graphics.DrawEllipse($pen, 10, 25, 70, 70)

# Draw line through circle
$graphics.DrawLine($pen, 10, 60, 80, 60)

# Draw ZF text
$font = New-Object System.Drawing.Font('Arial', 36, [System.Drawing.FontStyle]::Bold)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$graphics.DrawString('ZF', $font, $brush, 25, 43)

# Draw LIFETEC text (italic)
$fontItalic = New-Object System.Drawing.Font('Arial', 48, ([System.Drawing.FontStyle]::Italic -bor [System.Drawing.FontStyle]::Bold))
$graphics.DrawString('LIFETEC', $fontItalic, $brush, 110, 55)

# Draw line under LIFETEC
$penLine = New-Object System.Drawing.Pen([System.Drawing.Color]::White, 2)
$graphics.DrawLine($penLine, 110, 95, 340, 95)

# Save PNG
$outputPath = Join-Path $PSScriptRoot "public\zf-lifetec-logo.png"
$bitmap.Save($outputPath)
$graphics.Dispose()
$bitmap.Dispose()

Write-Host "PNG created: $outputPath"
