import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Checkbox } from './ui/checkbox';

export function MortgageCalculatorAccordion() {
  return (
    <section className="py-12 bg-gradient-to-br from-white via-blue-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full mb-3 text-sm">
            <Calculator className="w-4 h-4" />
            <span className="font-semibold">Mortgage Calculators</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground mb-2">
            Plan Your Home Purchase
          </h2>
          <p className="text-muted-foreground">
            Use our professional calculators to estimate costs and compare options
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible defaultValue="affordability" className="space-y-4">
            {/* Home Affordability Calculator */}
            <AccordionItem value="affordability" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Home Affordability Calculator</h3>
                    <p className="text-sm text-muted-foreground">How much home can you afford?</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <AffordabilityCalculator />
              </AccordionContent>
            </AccordionItem>

            {/* Mortgage Payment Calculator */}
            <AccordionItem value="payment" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Mortgage Payment Calculator</h3>
                    <p className="text-sm text-muted-foreground">Calculate your monthly mortgage payment</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <PaymentCalculator />
              </AccordionContent>
            </AccordionItem>

            {/* Rent vs Buy Calculator */}
            <AccordionItem value="rentvsbuy" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Rent vs Buy Calculator</h3>
                    <p className="text-sm text-muted-foreground">Compare the cost of renting versus buying</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <RentVsBuyCalculator />
              </AccordionContent>
            </AccordionItem>

            {/* Refinance Calculator */}
            <AccordionItem value="refinance" className="border rounded-lg bg-white shadow-sm">
              <AccordionTrigger className="px-6 py-4 hover:no-underline">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-5 h-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <h3 className="font-bold text-lg">Refinance Calculator</h3>
                    <p className="text-sm text-muted-foreground">See how much you could save by refinancing</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <RefinanceCalculator />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [downPayment, setDownPayment] = useState(50000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [debtToIncome, setDebtToIncome] = useState(43);
  const [homeInsurance, setHomeInsurance] = useState(150);
  const [propertyTax, setPropertyTax] = useState(300);
  const [hoaDues, setHoaDues] = useState(0);
  const [includePMI, setIncludePMI] = useState(true);

  const calculate = () => {
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyPayment = (monthlyIncome * (debtToIncome / 100)) - monthlyDebts;
    
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    const availableForPI = maxMonthlyPayment - propertyTax - homeInsurance - hoaDues;
    
    const maxLoanAmount = availableForPI * ((Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments)));
    
    const homePrice = maxLoanAmount + downPayment;
    
    const downPaymentPercent = (downPayment / homePrice) * 100;
    let pmi = 0;
    if (includePMI && downPaymentPercent < 20) {
      pmi = (maxLoanAmount * 0.005) / 12;
    }
    
    const totalMonthly = availableForPI + propertyTax + homeInsurance + hoaDues + pmi;
    
    return {
      homePrice: Math.round(homePrice),
      monthlyPayment: Math.round(totalMonthly),
      principalInterest: Math.round(availableForPI),
      taxes: propertyTax,
      insurance: homeInsurance,
      hoa: hoaDues,
      pmi: Math.round(pmi)
    };
  };

  const result = calculate();

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Annual Income</Label>
          <Input
            type="number"
            value={annualIncome}
            onChange={(e) => setAnnualIncome(parseFloat(e.target.value) || 0)}
            placeholder="75000"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Down Payment</Label>
          <Input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value) || 0)}
            placeholder="50000"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Monthly Debts</Label>
          <Input
            type="number"
            value={monthlyDebts}
            onChange={(e) => setMonthlyDebts(parseFloat(e.target.value) || 0)}
            placeholder="500"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Loan Term</Label>
          <Select value={loanTerm.toString()} onValueChange={(v: string) => setLoanTerm(parseInt(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 years</SelectItem>
              <SelectItem value="15">15 years</SelectItem>
              <SelectItem value="20">20 years</SelectItem>
              <SelectItem value="30">30 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Interest Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
            placeholder="6.5"
          />
        </div>

        <details className="text-sm">
          <summary className="cursor-pointer font-semibold mb-2">Advanced Options</summary>
          <div className="space-y-3 mt-3 pl-2">
            <div className="space-y-2">
              <Label>Debt-to-Income Ratio (%)</Label>
              <Input
                type="number"
                value={debtToIncome}
                onChange={(e) => setDebtToIncome(parseFloat(e.target.value) || 0)}
                placeholder="43"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Home Insurance (monthly)</Label>
              <Input
                type="number"
                value={homeInsurance}
                onChange={(e) => setHomeInsurance(parseFloat(e.target.value) || 0)}
                placeholder="150"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Property Tax (monthly)</Label>
              <Input
                type="number"
                value={propertyTax}
                onChange={(e) => setPropertyTax(parseFloat(e.target.value) || 0)}
                placeholder="300"
              />
            </div>
            
            <div className="space-y-2">
              <Label>HOA Dues (monthly)</Label>
              <Input
                type="number"
                value={hoaDues}
                onChange={(e) => setHoaDues(parseFloat(e.target.value) || 0)}
                placeholder="0"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="pmi-afford" 
                checked={includePMI}
                onCheckedChange={(checked: boolean) => setIncludePMI(checked)}
              />
              <label htmlFor="pmi-afford" className="text-sm">Include PMI</label>
            </div>
          </div>
        </details>
      </div>

      <div className="space-y-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <p className="text-sm opacity-90 mb-2">You may be able to afford a home worth</p>
          <div className="text-4xl font-bold mb-1">
            ${result.homePrice.toLocaleString()}
          </div>
          <p className="text-sm opacity-90">with a monthly payment of ${result.monthlyPayment.toLocaleString()}</p>
        </Card>

        <Card className="p-6">
          <h4 className="font-bold mb-3">Monthly Payment Breakdown</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Principal & Interest</span>
              <span className="font-semibold">${result.principalInterest.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Property Taxes</span>
              <span className="font-semibold">${result.taxes.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Home Insurance</span>
              <span className="font-semibold">${result.insurance.toLocaleString()}</span>
            </div>
            {result.hoa > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">HOA Dues</span>
                <span className="font-semibold">${result.hoa.toLocaleString()}</span>
              </div>
            )}
            {result.pmi > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">PMI</span>
                <span className="font-semibold">${result.pmi.toLocaleString()}</span>
              </div>
            )}
            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
              <span>Total Monthly</span>
              <span>${result.monthlyPayment.toLocaleString()}</span>
            </div>
          </div>
        </Card>

        <div className="flex gap-2">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline" className="flex-1">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

function PaymentCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(60000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [includePMI, setIncludePMI] = useState(true);
  const [includeTaxesInsurance, setIncludeTaxesInsurance] = useState(true);
  const [propertyTax, setPropertyTax] = useState(5550);
  const [homeInsurance, setHomeInsurance] = useState(1800);
  const [hoaDues, setHoaDues] = useState(0);

  const calculate = () => {
    const loanAmount = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    const monthlyPI = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    
    const downPaymentPercent = (downPayment / homePrice) * 100;
    let pmi = 0;
    if (includePMI && downPaymentPercent < 20) {
      pmi = (loanAmount * 0.005) / 12;
    }
    
    const monthlyTax = includeTaxesInsurance ? propertyTax / 12 : 0;
    const monthlyInsurance = includeTaxesInsurance ? homeInsurance / 12 : 0;
    const monthlyHOA = includeTaxesInsurance ? hoaDues : 0;
    
    const totalMonthly = monthlyPI + pmi + monthlyTax + monthlyInsurance + monthlyHOA;
    
    return {
      total: Math.round(totalMonthly),
      principalInterest: Math.round(monthlyPI),
      pmi: Math.round(pmi),
      taxes: Math.round(monthlyTax),
      insurance: Math.round(monthlyInsurance),
      hoa: monthlyHOA,
      loanAmount: Math.round(loanAmount)
    };
  };

  const result = calculate();

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Home Price</Label>
          <Input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(parseFloat(e.target.value) || 0)}
            placeholder="300000"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Down Payment</Label>
          <Input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value) || 0)}
            placeholder="60000"
          />
          <p className="text-xs text-muted-foreground">
            {((downPayment / homePrice) * 100).toFixed(1)}% of home price
          </p>
        </div>
        
        <div className="space-y-2">
          <Label>Loan Term</Label>
          <Select value={loanTerm.toString()} onValueChange={(v: string) => setLoanTerm(parseInt(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 years</SelectItem>
              <SelectItem value="15">15 years</SelectItem>
              <SelectItem value="20">20 years</SelectItem>
              <SelectItem value="30">30 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>Interest Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
            placeholder="6.5"
          />
        </div>

        <div className="space-y-3 pt-3 border-t">
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="pmi-payment" 
              checked={includePMI}
              onCheckedChange={(checked: boolean) => setIncludePMI(checked)}
            />
            <label htmlFor="pmi-payment" className="text-sm">Include PMI (if down payment &lt; 20%)</label>
          </div>
          
          <div className="flex items-center space-x-2">
            <Checkbox 
              id="taxes-insurance" 
              checked={includeTaxesInsurance}
              onCheckedChange={(checked: boolean) => setIncludeTaxesInsurance(checked)}
            />
            <label htmlFor="taxes-insurance" className="text-sm">Include Taxes & Insurance</label>
          </div>
        </div>

        {includeTaxesInsurance && (
          <div className="space-y-3 pl-6">
            <div className="space-y-2">
              <Label>Annual Property Tax</Label>
              <Input
                type="number"
                value={propertyTax}
                onChange={(e) => setPropertyTax(parseFloat(e.target.value) || 0)}
                placeholder="5550"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Annual Home Insurance</Label>
              <Input
                type="number"
                value={homeInsurance}
                onChange={(e) => setHomeInsurance(parseFloat(e.target.value) || 0)}
                placeholder="1800"
              />
            </div>
            
            <div className="space-y-2">
              <Label>Monthly HOA Dues</Label>
              <Input
                type="number"
                value={hoaDues}
                onChange={(e) => setHoaDues(parseFloat(e.target.value) || 0)}
                placeholder="0"
              />
            </div>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <p className="text-sm opacity-90 mb-2">Your estimated monthly mortgage payment is</p>
          <div className="text-4xl font-bold">
            ${result.total.toLocaleString()}
          </div>
        </Card>

        <Card className="p-6">
          <h4 className="font-bold mb-3">Payment Breakdown</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Principal & Interest</span>
              <span className="font-semibold">${result.principalInterest.toLocaleString()}</span>
            </div>
            {result.pmi > 0 && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">PMI</span>
                <span className="font-semibold">${result.pmi.toLocaleString()}</span>
              </div>
            )}
            {includeTaxesInsurance && (
              <>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Property Taxes</span>
                  <span className="font-semibold">${result.taxes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Home Insurance</span>
                  <span className="font-semibold">${result.insurance.toLocaleString()}</span>
                </div>
                {result.hoa > 0 && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">HOA Dues</span>
                    <span className="font-semibold">${result.hoa.toLocaleString()}</span>
                  </div>
                )}
              </>
            )}
            <div className="border-t pt-2 mt-2 flex justify-between font-bold">
              <span>Total Monthly</span>
              <span>${result.total.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t text-xs text-muted-foreground">
            <p>Loan Amount: ${result.loanAmount.toLocaleString()}</p>
            <p>Down Payment: ${downPayment.toLocaleString()} ({((downPayment / homePrice) * 100).toFixed(1)}%)</p>
          </div>
        </Card>

        <div className="flex gap-2">
          <Button className="flex-1">Apply for Mortgage</Button>
        </div>
      </div>
    </div>
  );
}

function RentVsBuyCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [monthlyRent, setMonthlyRent] = useState(2100);
  const [mortgageRate, setMortgageRate] = useState(6.5);
  const [hoaFee, setHoaFee] = useState(0);
  const [propertyTaxRate, setPropertyTaxRate] = useState(1.2);
  const [maintenanceCost, setMaintenanceCost] = useState(1);
  const [homeValueIncrease, setHomeValueIncrease] = useState(3);
  const [rentIncrease, setRentIncrease] = useState(3);
  const [yearsToCompare, setYearsToCompare] = useState(5);

  const calculate = () => {
    const initialLoanAmount = homePrice - downPayment;
    const monthlyRate = mortgageRate / 100 / 12;
    const numPayments = 30 * 12;
    
    const monthlyPI = initialLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const monthlyPropertyTax = (homePrice * (propertyTaxRate / 100)) / 12;
    const monthlyMaintenance = (homePrice * (maintenanceCost / 100)) / 12;
    const monthlyInsurance = 150;
    
    const totalMonthlyCostBuying = monthlyPI + monthlyPropertyTax + monthlyMaintenance + monthlyInsurance + hoaFee;
    
    let totalCostRenting = 0;
    let totalCostBuying = downPayment;
    let currentRent = monthlyRent;
    let currentHomeValue = homePrice;
    let remainingBalance = initialLoanAmount;
    
    let breakEvenMonth = 0;
    
    for (let month = 1; month <= yearsToCompare * 12; month++) {
      if (month % 12 === 0) {
        currentRent = currentRent * (1 + rentIncrease / 100);
        currentHomeValue = currentHomeValue * (1 + homeValueIncrease / 100);
      }
      
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPI - interestPayment;
      remainingBalance = Math.max(0, remainingBalance - principalPayment);
      
      totalCostRenting += currentRent;
      totalCostBuying += totalMonthlyCostBuying;
      
      const currentEquity = currentHomeValue - remainingBalance;
      const currentNetCostBuying = totalCostBuying - currentEquity;
      
      if (breakEvenMonth === 0 && currentNetCostBuying < totalCostRenting) {
        breakEvenMonth = month;
      }
    }
    
    const equityBuilt = currentHomeValue - remainingBalance;
    const netCostBuying = totalCostBuying - equityBuilt;
    
    const breakEvenYears = Math.floor(breakEvenMonth / 12);
    const breakEvenMonths = breakEvenMonth % 12;
    
    return {
      monthlyBuying: Math.round(totalMonthlyCostBuying),
      monthlyRenting: Math.round(monthlyRent),
      totalRenting: Math.round(totalCostRenting),
      totalBuying: Math.round(totalCostBuying),
      netCostBuying: Math.round(netCostBuying),
      equityBuilt: Math.round(equityBuilt),
      homeValueAfter: Math.round(currentHomeValue),
      breakEvenYears,
      breakEvenMonths,
      savingsFromBuying: Math.round(totalCostRenting - netCostBuying)
    };
  };

  const result = calculate();

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      <div className="space-y-4">
        <h4 className="font-semibold">Housing Costs</h4>
        
        <div className="space-y-2">
          <Label>Home Purchase Price</Label>
          <Input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(parseFloat(e.target.value) || 0)}
            placeholder="400000"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Down Payment</Label>
          <Input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(parseFloat(e.target.value) || 0)}
            placeholder="80000"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Expected Monthly Rent</Label>
          <Input
            type="number"
            value={monthlyRent}
            onChange={(e) => setMonthlyRent(parseFloat(e.target.value) || 0)}
            placeholder="2100"
          />
        </div>

        <h4 className="font-semibold pt-3">Mortgage & Costs</h4>
        
        <div className="space-y-2">
          <Label>Mortgage Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={mortgageRate}
            onChange={(e) => setMortgageRate(parseFloat(e.target.value) || 0)}
            placeholder="6.5"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Annual Property Tax Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={propertyTaxRate}
            onChange={(e) => setPropertyTaxRate(parseFloat(e.target.value) || 0)}
            placeholder="1.2"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Annual Maintenance Cost (% of home value)</Label>
          <Input
            type="number"
            step="0.1"
            value={maintenanceCost}
            onChange={(e) => setMaintenanceCost(parseFloat(e.target.value) || 0)}
            placeholder="1"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Monthly HOA Fee</Label>
          <Input
            type="number"
            value={hoaFee}
            onChange={(e) => setHoaFee(parseFloat(e.target.value) || 0)}
            placeholder="0"
          />
        </div>

        <h4 className="font-semibold pt-3">Assumptions</h4>
        
        <div className="space-y-2">
          <Label>Expected Annual Home Value Increase (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={homeValueIncrease}
            onChange={(e) => setHomeValueIncrease(parseFloat(e.target.value) || 0)}
            placeholder="3"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Expected Annual Rent Increase (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={rentIncrease}
            onChange={(e) => setRentIncrease(parseFloat(e.target.value) || 0)}
            placeholder="3"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Years to Compare</Label>
          <Select value={yearsToCompare.toString()} onValueChange={(v: string) => setYearsToCompare(parseInt(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="3">3 years</SelectItem>
              <SelectItem value="5">5 years</SelectItem>
              <SelectItem value="7">7 years</SelectItem>
              <SelectItem value="10">10 years</SelectItem>
              <SelectItem value="15">15 years</SelectItem>
              <SelectItem value="20">20 years</SelectItem>
              <SelectItem value="30">30 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <p className="text-sm opacity-90 mb-2">After {yearsToCompare} {yearsToCompare === 1 ? 'year' : 'years'},</p>
          <div className="text-2xl font-bold mb-2">
            {result.savingsFromBuying > 0 ? 'Buying' : 'Renting'} will save you
          </div>
          <div className="text-3xl font-bold">
            ${Math.abs(result.savingsFromBuying).toLocaleString()}
          </div>
          {result.breakEvenYears > 0 && (
            <p className="text-sm opacity-90 mt-3">
              Break-even point: {result.breakEvenYears} {result.breakEvenYears === 1 ? 'year' : 'years'}
              {result.breakEvenMonths > 0 && ` and ${result.breakEvenMonths} ${result.breakEvenMonths === 1 ? 'month' : 'months'}`}
            </p>
          )}
        </Card>

        <Card className="p-6">
          <h4 className="font-bold mb-3">Cost Comparison Over {yearsToCompare} Years</h4>
          <div className="space-y-3">
            <div className="border-b pb-2">
              <p className="text-sm font-semibold mb-2">Renting</p>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Total Cost</span>
                <span className="font-bold">${result.totalRenting.toLocaleString()}</span>
              </div>
            </div>
            
            <div className="border-b pb-2">
              <p className="text-sm font-semibold mb-2">Buying</p>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Paid</span>
                  <span className="font-semibold">${result.totalBuying.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Equity Built</span>
                  <span className="font-semibold text-green-600">-${result.equityBuilt.toLocaleString()}</span>
                </div>
                <div className="flex justify-between font-bold border-t pt-1">
                  <span>Net Cost</span>
                  <span>${result.netCostBuying.toLocaleString()}</span>
                </div>
              </div>
            </div>
            
            <div className="pt-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Monthly: Rent vs Buy</span>
                <span className="font-semibold">${result.monthlyRenting.toLocaleString()} vs ${result.monthlyBuying.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span className="text-muted-foreground">Home Value After {yearsToCompare} Years</span>
                <span className="font-semibold">${result.homeValueAfter.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex gap-2">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline" className="flex-1">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

function RefinanceCalculator() {
  const [remainingBalance, setRemainingBalance] = useState(250000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [currentPayment, setCurrentPayment] = useState(1748);
  const [remainingTerm, setRemainingTerm] = useState(25);
  const [newRate, setNewRate] = useState(6.5);
  const [newTerm, setNewTerm] = useState(30);
  const [closingCosts, setClosingCosts] = useState(5250);

  const calculate = () => {
    const newMonthlyRate = newRate / 100 / 12;
    const newNumPayments = newTerm * 12;
    
    const newMonthlyPayment = remainingBalance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newNumPayments)) / (Math.pow(1 + newMonthlyRate, newNumPayments) - 1);
    
    const monthlySavings = currentPayment - newMonthlyPayment;
    
    const oldTotalPaid = currentPayment * (remainingTerm * 12);
    const newTotalPaid = (newMonthlyPayment * (newTerm * 12)) + closingCosts;
    
    const totalSavings = oldTotalPaid - newTotalPaid;
    
    const breakEvenMonths = closingCosts / monthlySavings;
    
    return {
      newPayment: Math.round(newMonthlyPayment),
      currentPayment: Math.round(currentPayment),
      monthlySavings: Math.round(monthlySavings),
      totalSavings: Math.round(totalSavings),
      breakEvenMonths: Math.round(breakEvenMonths),
      breakEvenYears: Math.floor(breakEvenMonths / 12)
    };
  };

  const result = calculate();

  return (
    <div className="grid md:grid-cols-2 gap-6 mt-4">
      <div className="space-y-4">
        <h4 className="font-semibold">Current Loan Information</h4>
        
        <div className="space-y-2">
          <Label>Remaining Balance</Label>
          <Input
            type="number"
            value={remainingBalance}
            onChange={(e) => setRemainingBalance(parseFloat(e.target.value) || 0)}
            placeholder="250000"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Current Interest Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={currentRate}
            onChange={(e) => setCurrentRate(parseFloat(e.target.value) || 0)}
            placeholder="7.5"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Current Monthly Payment</Label>
          <Input
            type="number"
            value={currentPayment}
            onChange={(e) => setCurrentPayment(parseFloat(e.target.value) || 0)}
            placeholder="1748"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Remaining Term (years)</Label>
          <Input
            type="number"
            value={remainingTerm}
            onChange={(e) => setRemainingTerm(parseFloat(e.target.value) || 0)}
            placeholder="25"
          />
        </div>

        <h4 className="font-semibold pt-3">New Loan Information</h4>
        
        <div className="space-y-2">
          <Label>New Loan Term</Label>
          <Select value={newTerm.toString()} onValueChange={(v: string) => setNewTerm(parseInt(v))}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 years</SelectItem>
              <SelectItem value="15">15 years</SelectItem>
              <SelectItem value="20">20 years</SelectItem>
              <SelectItem value="30">30 years</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label>New Interest Rate (%)</Label>
          <Input
            type="number"
            step="0.1"
            value={newRate}
            onChange={(e) => setNewRate(parseFloat(e.target.value) || 0)}
            placeholder="6.5"
          />
        </div>
        
        <div className="space-y-2">
          <Label>Estimated Closing Costs</Label>
          <Input
            type="number"
            value={closingCosts}
            onChange={(e) => setClosingCosts(parseFloat(e.target.value) || 0)}
            placeholder="5250"
          />
        </div>
      </div>

      <div className="space-y-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <p className="text-sm opacity-90 mb-2">Refinancing could reduce your monthly payment by</p>
          <div className="text-4xl font-bold mb-1">
            ${Math.abs(result.monthlySavings).toLocaleString()}
          </div>
          <p className="text-sm opacity-90">
            and {result.totalSavings > 0 ? 'save' : 'cost'} you ${Math.abs(result.totalSavings).toLocaleString()} over {newTerm} years
          </p>
        </Card>

        <Card className="p-6">
          <h4 className="font-bold mb-3">Payment Comparison</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b">
              <div>
                <p className="text-sm text-muted-foreground">Current Payment</p>
                <p className="text-2xl font-bold">${result.currentPayment.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">New Payment</p>
                <p className="text-2xl font-bold text-green-600">${result.newPayment.toLocaleString()}</p>
              </div>
            </div>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Monthly Savings</span>
                <span className="font-semibold text-green-600">${result.monthlySavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Savings (over {newTerm} years)</span>
                <span className="font-semibold text-green-600">${Math.abs(result.totalSavings).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Closing Costs</span>
                <span className="font-semibold">${closingCosts.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Break-Even Time</span>
                <span className="font-semibold">
                  {result.breakEvenYears > 0 && `${result.breakEvenYears} years `}
                  {result.breakEvenMonths % 12} months
                </span>
              </div>
            </div>
          </div>
        </Card>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm">
          <p className="font-semibold text-blue-900 mb-1">Break-Even Analysis</p>
          <p className="text-blue-800">
            You'll recoup your closing costs in {result.breakEvenMonths} months through monthly savings. 
            After that, it's pure savings!
          </p>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1">Apply to Refinance</Button>
          <Button variant="outline" className="flex-1">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}
