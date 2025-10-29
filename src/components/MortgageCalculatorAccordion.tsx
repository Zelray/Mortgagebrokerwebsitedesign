import { useState } from 'react';
import { Calculator } from 'lucide-react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Label } from './ui/label';
import { Slider } from './ui/slider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Checkbox } from './ui/checkbox';
import { PieChart, Pie, Cell } from 'recharts';

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

const formatNumber = (value: number) => {
  return new Intl.NumberFormat('en-US').format(value);
};

const parseCurrency = (value: string) => {
  return parseFloat(value.replace(/[^0-9.-]+/g, '')) || 0;
};

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

        <div className="max-w-6xl mx-auto">
          <Accordion type="single" collapsible defaultValue="payment" className="space-y-4">
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

function PaymentCalculator() {
  const [homePrice, setHomePrice] = useState(300000);
  const [downPayment, setDownPayment] = useState(10500);
  const [downPaymentPercent, setDownPaymentPercent] = useState(3.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [showAssumptions, setShowAssumptions] = useState(false);
  const [propertyTax, setPropertyTax] = useState(300);
  const [homeInsurance, setHomeInsurance] = useState(150);
  const [hoaDues, setHoaDues] = useState(0);
  const [includePMI, setIncludePMI] = useState(true);

  const handleHomePriceChange = (newPrice: number) => {
    setHomePrice(newPrice);
    setDownPayment(Math.round(newPrice * (downPaymentPercent / 100)));
  };

  const handleDownPaymentChange = (newDownPayment: number) => {
    setDownPayment(newDownPayment);
    setDownPaymentPercent((newDownPayment / homePrice) * 100);
  };

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
    
    const totalMonthly = monthlyPI + pmi + propertyTax + homeInsurance + hoaDues;
    
    return {
      total: Math.round(totalMonthly),
      principalInterest: Math.round(monthlyPI),
      pmi: Math.round(pmi),
      taxes: propertyTax,
      insurance: homeInsurance,
      hoa: hoaDues,
      loanAmount: Math.round(loanAmount)
    };
  };

  const result = calculate();
  
  const chartData = [
    { name: 'P&I', value: result.principalInterest, color: '#0ea5e9' },
    { name: 'Taxes', value: result.taxes, color: '#10b981' },
    { name: 'Insurance', value: result.insurance, color: '#f59e0b' },
    ...(result.hoa > 0 ? [{ name: 'HOA', value: result.hoa, color: '#8b5cf6' }] : []),
    ...(result.pmi > 0 ? [{ name: 'PMI', value: result.pmi, color: '#ec4899' }] : [])
  ];

  return (
    <div className="grid lg:grid-cols-2 gap-8 mt-6">
      {/* Left Column - Inputs */}
      <div>
        <Card className="p-6 bg-gray-50/50 border-gray-200 shadow-sm">
          <div className="space-y-6">
            {/* Home Price with Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <Label className="text-sm font-medium text-gray-700">Home price</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">$</span>
                  <Input
                    type="text"
                    value={formatNumber(homePrice)}
                    onChange={(e) => handleHomePriceChange(parseCurrency(e.target.value))}
                    className="pl-9 w-36 text-right bg-white border-gray-300 font-medium"
                  />
                </div>
              </div>
              <Slider
                value={[homePrice]}
                onValueChange={([value]: number[]) => handleHomePriceChange(value)}
                min={50000}
                max={2000000}
                step={10000}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              />
            </div>

            {/* Down Payment with Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <Label className="text-sm font-medium text-gray-700">Down payment</Label>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">$</span>
                    <Input
                      type="text"
                      value={formatNumber(downPayment)}
                      onChange={(e) => handleDownPaymentChange(parseCurrency(e.target.value))}
                      className="pl-9 w-28 text-right bg-white border-gray-300 font-medium"
                    />
                  </div>
                  <span className="text-sm text-gray-600 font-medium min-w-[48px] text-right">
                    {downPaymentPercent.toFixed(1)}%
                  </span>
                </div>
              </div>
              <Slider
                value={[downPayment]}
                onValueChange={([value]: number[]) => handleDownPaymentChange(Math.min(value, homePrice * 0.5))}
                min={0}
                max={homePrice * 0.5}
                step={1000}
                className="[&_[role=slider]]:bg-primary [&_[role=slider]]:border-primary [&_[role=slider]]:h-4 [&_[role=slider]]:w-4"
              />
            </div>

            {/* Loan Term */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Loan term</Label>
              <Select value={loanTerm.toString()} onValueChange={(v: string) => setLoanTerm(parseInt(v))}>
                <SelectTrigger className="bg-white border-gray-300">
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

            {/* Interest Rate */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">Interest rate</Label>
              <div className="relative">
                <Input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
                  className="pr-8 bg-white border-gray-300"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm">%</span>
              </div>
            </div>

            {/* Assumptions Toggle */}
            <div className="pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowAssumptions(!showAssumptions)}
                className="flex items-center justify-between w-full text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
              >
                <span>Additional costs</span>
                <span className="text-xl">{showAssumptions ? '−' : '+'}</span>
              </button>
              
              {showAssumptions && (
                <div className="mt-4 space-y-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="pmi"
                      checked={includePMI}
                      onCheckedChange={(checked: boolean) => setIncludePMI(checked)}
                    />
                    <label htmlFor="pmi" className="text-sm text-gray-600 cursor-pointer">
                      Include PMI (if down payment &lt; 20%)
                    </label>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Property tax (monthly)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">$</span>
                      <Input
                        type="number"
                        value={propertyTax}
                        onChange={(e) => setPropertyTax(parseFloat(e.target.value) || 0)}
                        className="pl-9 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">Home insurance (monthly)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">$</span>
                      <Input
                        type="number"
                        value={homeInsurance}
                        onChange={(e) => setHomeInsurance(parseFloat(e.target.value) || 0)}
                        className="pl-9 bg-white border-gray-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700">HOA dues (monthly)</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm pointer-events-none">$</span>
                      <Input
                        type="number"
                        value={hoaDues}
                        onChange={(e) => setHoaDues(parseFloat(e.target.value) || 0)}
                        className="pl-9 bg-white border-gray-300"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Card>
      </div>

      {/* Right Column - Results */}
      <div className="space-y-6">
        {/* Payment Display */}
        <div>
          <p className="text-sm text-gray-600 mb-2">Your estimated monthly payment</p>
          <div className="text-5xl font-bold text-primary mb-1">
            {formatCurrency(result.total)}
          </div>
          <p className="text-sm text-gray-500">per month</p>
        </div>

        {/* Chart Section */}
        <Card className="p-6 bg-white border-gray-200 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-6">Payment breakdown</h4>
          
          <div className="flex items-center gap-8">
            {/* Donut Chart */}
            <div className="relative flex-shrink-0">
              <div style={{ width: 200, height: 200 }}>
                <PieChart width={200} height={200}>
                  <Pie
                    data={chartData}
                    cx={100}
                    cy={100}
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xs text-gray-500">Total</div>
                <div className="text-xl font-bold text-gray-900">{formatCurrency(result.total)}</div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-2.5 flex-1">
              {chartData.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{formatCurrency(item.value)}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <Button size="lg" className="w-full">
            Apply for Mortgage
          </Button>
          <Button size="lg" variant="outline" className="w-full">
            Contact a Loan Officer
          </Button>
        </div>
      </div>
    </div>
  );
}

function AffordabilityCalculator() {
  const [annualIncome, setAnnualIncome] = useState(75000);
  const [downPayment, setDownPayment] = useState(50000);
  const [monthlyDebts, setMonthlyDebts] = useState(500);
  const [interestRate, setInterestRate] = useState(6.5);

  const calculate = () => {
    const monthlyIncome = annualIncome / 12;
    const maxMonthlyPayment = (monthlyIncome * 0.43) - monthlyDebts;
    
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = 30 * 12;
    
    const monthlyTaxInsurance = 450;
    const availableForPI = maxMonthlyPayment - monthlyTaxInsurance;
    
    const maxLoanAmount = availableForPI * ((Math.pow(1 + monthlyRate, numPayments) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, numPayments)));
    
    const homePrice = maxLoanAmount + downPayment;
    
    return {
      homePrice: Math.round(homePrice),
      monthlyPayment: Math.round(maxMonthlyPayment)
    };
  };

  const result = calculate();

  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-4">
      <Card className="p-6 bg-gray-50">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-sm">Annual Income</Label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <Input
                  type="text"
                  value={formatNumber(annualIncome)}
                  onChange={(e) => setAnnualIncome(parseCurrency(e.target.value))}
                  className="pl-6 w-32 text-right bg-white"
                />
              </div>
            </div>
            <Slider
              value={[annualIncome]}
              onValueChange={([value]: number[]) => setAnnualIncome(value)}
              min={30000}
              max={300000}
              step={5000}
              className="[&_[role=slider]]:bg-primary"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label className="text-sm">Down Payment</Label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <Input
                  type="text"
                  value={formatNumber(downPayment)}
                  onChange={(e) => setDownPayment(parseCurrency(e.target.value))}
                  className="pl-6 w-32 text-right bg-white"
                />
              </div>
            </div>
            <Slider
              value={[downPayment]}
              onValueChange={([value]: number[]) => setDownPayment(value)}
              min={0}
              max={200000}
              step={5000}
              className="[&_[role=slider]]:bg-primary"
            />
          </div>

          <div className="space-y-2">
            <Label className="text-sm">Monthly Debts</Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <Input
                type="number"
                value={monthlyDebts}
                onChange={(e) => setMonthlyDebts(parseFloat(e.target.value) || 0)}
                className="pl-6 bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-sm">Interest Rate (%)</Label>
            <Input
              type="number"
              step="0.1"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value) || 0)}
              className="bg-white"
            />
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <p className="text-sm opacity-90 mb-2">You may be able to afford a home worth</p>
          <div className="text-4xl font-bold mb-1">{formatCurrency(result.homePrice)}</div>
          <p className="text-sm opacity-90">with a monthly payment of {formatCurrency(result.monthlyPayment)}</p>
        </Card>

        <div className="flex gap-2">
          <Button className="flex-1">Apply Now</Button>
          <Button variant="outline" className="flex-1">Contact Us</Button>
        </div>
      </div>
    </div>
  );
}

function RentVsBuyCalculator() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [monthlyRent, setMonthlyRent] = useState(2100);
  const [yearsToCompare, setYearsToCompare] = useState(5);

  const calculate = () => {
    const initialLoanAmount = homePrice - downPayment;
    const monthlyRate = 6.5 / 100 / 12;
    const numPayments = 30 * 12;
    
    const monthlyPI = initialLoanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / (Math.pow(1 + monthlyRate, numPayments) - 1);
    const monthlyBuying = monthlyPI + 600;
    
    let totalRenting = monthlyRent * yearsToCompare * 12;
    let totalBuying = downPayment + (monthlyBuying * yearsToCompare * 12);
    
    const homeValueAfter = homePrice * Math.pow(1.03, yearsToCompare);
    let remainingBalance = initialLoanAmount;
    
    for (let month = 1; month <= yearsToCompare * 12; month++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPI - interestPayment;
      remainingBalance = Math.max(0, remainingBalance - principalPayment);
    }
    
    const equity = homeValueAfter - remainingBalance;
    const netCostBuying = totalBuying - equity;
    
    return {
      savingsFromBuying: Math.round(totalRenting - netCostBuying)
    };
  };

  const result = calculate();

  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-4">
      <Card className="p-6 bg-gray-50">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Home Price</Label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <Input
                  type="text"
                  value={formatNumber(homePrice)}
                  onChange={(e) => setHomePrice(parseCurrency(e.target.value))}
                  className="pl-6 w-32 text-right bg-white"
                />
              </div>
            </div>
            <Slider
              value={[homePrice]}
              onValueChange={([value]: number[]) => setHomePrice(value)}
              min={100000}
              max={1000000}
              step={10000}
              className="[&_[role=slider]]:bg-primary"
            />
          </div>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Down Payment</Label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <Input
                  type="text"
                  value={formatNumber(downPayment)}
                  onChange={(e) => setDownPayment(parseCurrency(e.target.value))}
                  className="pl-6 w-32 text-right bg-white"
                />
              </div>
            </div>
            <Slider
              value={[downPayment]}
              onValueChange={([value]: number[]) => setDownPayment(value)}
              min={0}
              max={homePrice * 0.5}
              step={5000}
              className="[&_[role=slider]]:bg-primary"
            />
          </div>

          <div className="space-y-2">
            <Label>Monthly Rent</Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <Input
                type="number"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(parseFloat(e.target.value) || 0)}
                className="pl-6 bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Years to Compare</Label>
            <Select value={yearsToCompare.toString()} onValueChange={(v: string) => setYearsToCompare(parseInt(v))}>
              <SelectTrigger className="bg-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="3">3 years</SelectItem>
                <SelectItem value="5">5 years</SelectItem>
                <SelectItem value="10">10 years</SelectItem>
                <SelectItem value="15">15 years</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
        <p className="text-sm opacity-90 mb-2">After {yearsToCompare} years,</p>
        <div className="text-2xl font-bold mb-2">
          {result.savingsFromBuying > 0 ? 'Buying' : 'Renting'} will save you
        </div>
        <div className="text-4xl font-bold">{formatCurrency(Math.abs(result.savingsFromBuying))}</div>
      </Card>
    </div>
  );
}

function RefinanceCalculator() {
  const [remainingBalance, setRemainingBalance] = useState(250000);
  const [currentRate, setCurrentRate] = useState(7.5);
  const [currentPayment, setCurrentPayment] = useState(1748);
  const [newRate, setNewRate] = useState(6.5);
  const [closingCosts, setClosingCosts] = useState(5250);

  const calculate = () => {
    const newMonthlyRate = newRate / 100 / 12;
    const newNumPayments = 30 * 12;
    
    const newMonthlyPayment = remainingBalance * (newMonthlyRate * Math.pow(1 + newMonthlyRate, newNumPayments)) / (Math.pow(1 + newMonthlyRate, newNumPayments) - 1);
    
    const monthlySavings = currentPayment - newMonthlyPayment;
    const breakEvenMonths = closingCosts / monthlySavings;
    
    return {
      newPayment: Math.round(newMonthlyPayment),
      monthlySavings: Math.round(monthlySavings),
      breakEvenMonths: Math.round(breakEvenMonths)
    };
  };

  const result = calculate();

  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-4">
      <Card className="p-6 bg-gray-50">
        <div className="space-y-4">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <Label>Remaining Balance</Label>
              <div className="relative">
                <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
                <Input
                  type="text"
                  value={formatNumber(remainingBalance)}
                  onChange={(e) => setRemainingBalance(parseCurrency(e.target.value))}
                  className="pl-6 w-32 text-right bg-white"
                />
              </div>
            </div>
            <Slider
              value={[remainingBalance]}
              onValueChange={([value]: number[]) => setRemainingBalance(value)}
              min={50000}
              max={1000000}
              step={10000}
              className="[&_[role=slider]]:bg-primary"
            />
          </div>

          <div className="space-y-2">
            <Label>Current Interest Rate (%)</Label>
            <Input
              type="number"
              step="0.1"
              value={currentRate}
              onChange={(e) => setCurrentRate(parseFloat(e.target.value) || 0)}
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Current Monthly Payment</Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <Input
                type="number"
                value={currentPayment}
                onChange={(e) => setCurrentPayment(parseFloat(e.target.value) || 0)}
                className="pl-6 bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>New Interest Rate (%)</Label>
            <Input
              type="number"
              step="0.1"
              value={newRate}
              onChange={(e) => setNewRate(parseFloat(e.target.value) || 0)}
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label>Closing Costs</Label>
            <div className="relative">
              <span className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500 text-sm">$</span>
              <Input
                type="number"
                value={closingCosts}
                onChange={(e) => setClosingCosts(parseFloat(e.target.value) || 0)}
                className="pl-6 bg-white"
              />
            </div>
          </div>
        </div>
      </Card>

      <div className="space-y-4">
        <Card className="p-6 bg-gradient-to-br from-primary to-primary/80 text-white">
          <p className="text-sm opacity-90 mb-2">Refinancing could reduce your monthly payment by</p>
          <div className="text-4xl font-bold mb-1">{formatCurrency(result.monthlySavings)}</div>
          <p className="text-sm opacity-90">
            Break-even in {Math.floor(result.breakEvenMonths / 12)} years {result.breakEvenMonths % 12} months
          </p>
        </Card>

        <Card className="p-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Current Payment</span>
              <span className="font-semibold">{formatCurrency(currentPayment)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">New Payment</span>
              <span className="font-semibold text-green-600">{formatCurrency(result.newPayment)}</span>
            </div>
            <div className="flex justify-between pt-2 border-t">
              <span className="font-semibold">Monthly Savings</span>
              <span className="font-semibold text-green-600">{formatCurrency(result.monthlySavings)}</span>
            </div>
          </div>
        </Card>

        <Button className="w-full">Apply to Refinance</Button>
      </div>
    </div>
  );
}
